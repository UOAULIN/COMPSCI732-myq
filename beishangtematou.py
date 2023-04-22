import sys


class Graph:
    vector_num = 0

    def __init__(self, t, level):

        self.adj_list = {}
        self.vector_count = t
        self.level = level
        self.c_v = [0 for _ in range(t)]
        for j in range(0, t):
            self.c_v[j] = Graph.vector_num
            self.adj_list[self.c_v[j]] = []
            Graph.vector_num += 1

    def add_vertex(self, v):
        self.c_v[v] = Graph.vector_num

        self.adj_list[self.c_v[v]] = []
        self.vector_count += 1
        Graph.vector_num += 1

    def add_edge(self, start_v, end_v):
        self.adj_list.setdefault(self.c_v[start_v], [])
        self.adj_list.setdefault(self.c_v[end_v], [])

        if self.c_v[end_v] not in self.adj_list[self.c_v[start_v]]:
            self.adj_list[self.c_v[end_v]].append(self.c_v[start_v])
            self.adj_list[self.c_v[start_v]].append(self.c_v[end_v])

    def merge(self, oldGraph):
        for key, value in oldGraph.adj_list.items():
            for i in range(len(oldGraph.c_v)):
                if oldGraph.c_v[i] in value:
                    value.remove(oldGraph.c_v[i])
                    value.append(self.c_v[i])

        for i in range(len(self.c_v)):
            for j in oldGraph.adj_list[oldGraph.c_v[i]]:
                if j not in self.adj_list[self.c_v[i]]:
                    self.adj_list[self.c_v[i]].append(j)

            oldGraph.adj_list.pop(oldGraph.c_v[i])
        self.adj_list.update(oldGraph.adj_list)
        return self

    def print_degrees(self, first):
        if not first:
            print()
        degrees = [len(lst) for lst in self.adj_list.values()]
        degrees.sort(reverse=True)
        print(" ".join(str(degree) for degree in degrees), end="")

    def get_l(self):
        return self.level



def graph_p(tParse):
    initVertexNum = int(tParse[0]) + 1
    pathWidthTParse = tParse[1:].strip()
    opts = pathWidthTParse.split()
    graphs = []
    curGraph = None
    level = 0
    # 遍历的每一个文本在opts中
    for i in range(len(opts)):
        opt = opts[i]
        if opt == "(":
            if opts[i + 1] != "(":
                level += 1
                curGraph = Graph(initVertexNum, level)

        elif opt == ")":
            if len(graphs) == 0:
                graphs.append(curGraph)
            else:
                while graphs[0] != curGraph and graphs[0].get_l() >= level:
                    graphs.insert(0, curGraph.merge(graphs.pop(0)))
            level -= 1
        else:
            if len(opt) == 1:
                curGraph.add_vertex(int(opt))
            elif len(opt) == 2:
                curGraph.add_edge(int(opt[0]), int(opt[1]))
    Graph.vector_num = 0
    return graphs.pop()


inputTP = []
while True:
    line = input().strip()
    inputTP.append(line)
    if line.startswith("0"):
        break
for i in range(len(inputTP)):
    graph = graph_p(inputTP[i])
    graph.print_degrees(i == 0)
