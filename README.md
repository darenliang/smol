# smol

A minimal Hugo theme that respects your privacy and is easy on your bandwidth.

smol is based on [Blank](https://github.com/Vimux/Blank) created by [Vimux](https://github.com/Vimux).

## Features

- No JavaScript
- No Google spyware or tracking of any kind
- No other external dependencies
- Dark mode support (depending on your OS's setting)

## Installation

In your Hugo site `themes` directory, run:

```
git clone https://github.com/colorchestra/smol
```

Next, open `config.toml` in the base of the Hugo site and ensure the theme option is set to `smol`.

```
theme = "smol"
```

Lastly, add the following lines to your `config.toml` to make use of all the menu entries in the header and the footer if you need them.

```
# Header
[menu]
  [[menu.main]]
        identifier = "posts"
        name = "Posts"
        url = "/posts/"
        weight = 1 

  [[menu.main]]
        identifier = "categories"
        name = "Categories"
        url = "/categories/"
        weight = 2 

  [[menu.main]]
        identifier = "tags"
        name = "Tags"
        url = "/tags/"
        weight = 3

# Footer
  [[menu.footer]]
        name = "Github"
        url = "https://github.com/example
        weight = 1 

    [[menu.footer]]
        name = "Mastodon"
        url = "https://example.com/@user
        weight = 2 

    [[menu.footer]]
        name = "Imprint"
        url = "/imprint"
        weight = 3 

```


For more information read the official [quick start guide](https://gohugo.io/getting-started/quick-start/) of Hugo.

## Contributing

Have you found a bug or got an idea for a new feature? Feel free to use the [issue tracker](https://github.com/colorchestra/smol/issues) to let me know. Or make directly a [pull request](https://github.com/colorchestra/smol/pulls).

## License

This theme is released under the [MIT license](https://github.com/colorchestra/smol/blob/master/LICENSE).
