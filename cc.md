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
