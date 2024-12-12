db_endpoint <- "https://www.omdbapi.com/?"
your_api_key <- "ba1e710"
movie_title <- "t=Elf"
omdb_api_url <- 
  paste(db_endpoint,movie_title,your_api_key, sep ="")

this_movie <- omdb_api_url
GET()
content(as = "text",
encoding = "UTF-8")
fromJSON(flatten = TRUE)
as_tibble()