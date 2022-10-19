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

### Text formatting can be used here are following:

- `"..."` normal content converts to `<p>...</p>`
- `$h1$` to `$h6$` (block)
- `$a$` (block)
- `$img$` (block)
- `$b$...$b$` (inline)

> `(block)` means have to be used independently like `"$h1$..."` `(inline)` means can be used inside a `normal component` or independently. Ie `"$b$...$b$"` or `"...$b$...$b$...$b$...$b$..."`

## Content

Actual repeated text content for book. Which is consists of page meta data and page content. Where in the object `chapter`, `chapterName`, `chapterRange` is optional to use but `pages` array is required. Inside the array object `pageNo(string)` and `articles(array)` are required. Following text formatting can be used:

- `"..."` normal content converts to `<p>...</p>`
- `$a$` for link (have to be used in front of string declaration and can't be combined with other formatters)
- `$b$...$b$` for bold (can be used single or multiple time independently or inside a `normal content` declaration)
- `^^` for spaces (can be used inside a `normal content` declaration one `^` means `4 space bar gap`)
