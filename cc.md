for $period in distinct-values(//artists/artist/period)

where every $artist in //artists/artist[period = $period] satisfies $artist/rating >= 10

return
  element period {
    attribute name {$period},
    for $artist in //artists/artist[period = $period]
    return
      element artist {
        attribute name {$artist/@name}
      }
  }



--------------------------------------------------------------------------------
let $a := //artists/artist[pieces > 1000]
for $artist in $a
	for $artist1 in $artist/following-sibling::*[pieces > 1000]

return element pair{
	element artist{
    	attribute name{$artist/@name}  
    },
    element artist1{
    	attribute name{$artist1/@name}  
    }
}


--------------------------------------------------------------------------------
for $rating in distinct-values(//artists/artist/rating)
return element rating{
	attribute value {$rating},
    element average_age{avg(//artists/artist[rating = $rating]/age)}
}

 
