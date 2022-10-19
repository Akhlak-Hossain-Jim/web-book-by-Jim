# Writing the data

## Config Info

### metaData (basic data for the book)

- **title**: Book Name
- **writer**: Author of the book

### coverPages (is for any or all kind of cover and attribute pages)

- **type**: either `"cover"` or `"attribute"`
- **contentType**: either `"image"` or `"text"`
  - if `contentType` is `image` just put a image url at `src` & add an `alt` text and keep the text `empty`
  - else keep `src` & `alt` empty and fill up the `data` array
