---
title: Building a Command Line Tool (CLI) with Rust
header:
    overlay_image: /assets/images/guitar_on_file.jpeg
    teaser: /assets/images/guitar_on_file.jpeg
    caption: 'Photo by <a href="https://unsplash.com/@darkrider?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Dark Rider</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank" rel="noopener noreferrer">Unsplash</a>'
    overlay_filter: 0.5
excerpt: A step by step guide to print your guitar chords
toc: true
---

Do you play guitar? Do you always have to look up guitar chords online when playing songs with some less commonly used chords?

How about let’s build a [command line tool (CLI)](https://en.wikipedia.org/wiki/Command-line_interface), that takes in the name of a chord, and outputs a diagram about how to play it.

Today, I will share with you how to build a command line tool in Rust from scratch with the above idea.

# End Goal

By the end, we would like to build a CLI named `chord`. It takes a single string as input — the name of the chord. And it will print the chord diagram. Like this:

```
$ chord C

x     ◯   ◯
┌─┬─┬─┬─┬─┐
│ │ │ │ ◯ │
├─┼─┼─┼─┼─┤
│ │ ◯ │ │ │
├─┼─┼─┼─┼─┤
│ ◯ │ │ │ │
└─┴─┴─┴─┴─┘
```

# Why Rust

In my last post, [Building a gRPC Server with Rust](https://betterprogramming.pub/building-a-grpc-server-with-rust-be2c52f0860e),
 I already shared why Rust is interesting and why you should learn Rust.
 Here is one thing that I want to emphasize from that post:

> Based on [Stack Overflow Survey](https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-language-love-dread): "For the sixth-year, Rust is the most loved language."

![](/assets/images/rust-most-loved-2021.png)
*Rust is the most loved language. [Stack Overflow Survey 2021](https://insights.stackoverflow.com/survey/2021#most-loved-dreaded-and-wanted-language-love-dread)*

Not only is Rust great for building backend services, it is also super easy to build CLIs. Let’s dive right in.

# Install Rust

Install Rust with the following:

```
$ curl --proto '=https' --tlsv1.2 -sSf <https://sh.rustup.rs> | sh
```

For more information about installation, check out: [https://www.rust-lang.org/tools/install](https://www.rust-lang.org/tools/install).

# Create a new Rust Project

```
$ cargo new chord --bin

Created binary (application) `chord` package
```

Let’s compile and run the program and make sure that everything is set up properly:

```
$ cd chord
$ cargo run

Hello, world!
```

This is what we have so far:

```
|-Cargo.toml
|-Cargo.lock
|-src
|  |-main.rs
```

# Print the Fretboard

A guitar has 6 strings, and we usually use the [fretboard](https://en.wikipedia.org/wiki/Fingerboard) to represent the finger placements.

This is what `main.rs` looks like so far:

```
fn main() {
    println!("Hello, world!");
}
```

Let’s update it to print an empty fretboard:

```
const FRETBOARD: &str = "◯ ◯ ◯ ◯ ◯ ◯
┌─┬─┬─┬─┬─┐
│ │ │ │ │ │
├─┼─┼─┼─┼─┤
│ │ │ │ │ │
├─┼─┼─┼─┼─┤
│ │ │ │ │ │
└─┴─┴─┴─┴─┘";

fn main() {
    println!("{}", FRETBOARD);
}
```

Running the program, here is what we have so far:

```
$ cargo run

◯ ◯ ◯ ◯ ◯ ◯
┌─┬─┬─┬─┬─┐
│ │ │ │ │ │
├─┼─┼─┼─┼─┤
│ │ │ │ │ │
├─┼─┼─┼─┼─┤
│ │ │ │ │ │
└─┴─┴─┴─┴─┘
```

<script src="https://gist.github.com/yzhong52/128efcf352fd4d7921d3cd7f78d23644.js?file=main_with_clap.rs"></script> 

# Clap

To add the capability of parsing command line arguments, we will bring in a library [https://docs.rs/clap/latest/clap/](https://docs.rs/clap/latest/clap/).

To add clap as a dependency to our project:

```
$ cargo add clap --features derive
```

This simply will add the following line to `cargo.toml`, which is where all the dependencies are defined for Rust:

```
clap = { version = "3.2.21", features = ["derive"] }
```

And update `main.rs` to the following:

With [Rust macros](https://doc.rust-lang.org/book/ch19-06-macros.html), it is possible for clap to make it incredibly simple to annotate the `Args` and get argument parsing for free.

```
/// A CLI to show you how to play a guitar chord
#[derive(Parser, Debug)]
#[clap(version, about)]
struct Args {
   /// Name of the chord
   #[clap()]
   name: String,
}
```

Let’s try it out:

```
$ cargo run -- --help

chord 0.1.0
A CLI to show you how to play a guitar chord

USAGE:
    chord <NAME>

ARGS:
    <NAME>    Name of the chord

OPTIONS:
    -h, --help       Print help information
    -V, --version    Print version information

$ cargo run -- C

This is how you play 'C' chord:
◯ ◯ ◯ ◯ ◯ ◯
┌─┬─┬─┬─┬─┐
│ │ │ │ │ │
├─┼─┼─┼─┼─┤
│ │ │ │ │ │
├─┼─┼─┼─┼─┤
│ │ │ │ │ │
└─┴─┴─┴─┴─┘
```

The double dash `--` is a very common way to indicate the end of the options for `cargo` and the rest is passed on to the CLI program instead. Not only `cargo`, but [many other shell commands also do this way](https://unix.stackexchange.com/questions/11376/what-does-double-dash-mean).

There
 is another hidden feature that is worth highlighting. Notice that both 
"A CLI to show you how to play a guitar chord" and "Name of the chord" 
are comments in our source code? They are also included in the help 
message.


From the source code:

```
/// A CLI to show you how to play a guitar chord
#[derive(Parser, Debug)]
#[clap(version, about)]
struct Args {
    /// Name of the chord
    #[clap()]
    name: String,
}
```

From the output:

```
chord 0.1.0
A CLI to show you how to play a guitar chord

USAGE:
    chord <NAME>

ARGS:
    <NAME>    Name of the chord
```

That’s all we need to learn about clap. Next, let’s move on to the actual CLI itself.

# The CLI

Update the main function to the following:

<script src="https://gist.github.com/yzhong52/128efcf352fd4d7921d3cd7f78d23644.js?file=main_with_finger_overlay.rs"></script> 

Here,
 if the input chord name is unknown, we will print the "Unknown chord" 
error message. Otherwise, we overlay the finger placement on top of the 
empty fretboard we have earlier.

To test things out:

```
$ cargo run -- C

This is how you play 'C' chord:
x     ◯   ◯
┌─┬─┬─┬─┬─┐
│ │ │ │ ◯ │
├─┼─┼─┼─┼─┤
│ │ ◯ │ │ │
├─┼─┼─┼─┼─┤
│ ◯ │ │ │ │
└─┴─┴─┴─┴─┘

$ cargo run -- Asus4

Unknown chord 'Asus4'
```

All looks great! Quick and simple.

# Installation

So far, we’ve been compiling and running the CLI. `cargo` not only handle building, running, library dependency management, it also handle installation.

Install `chord` CLI like so:

```
cargo install --path .
```

Now we can use this CLI directly:

```
$ chord G

This is how you play 'G' chord:
    ◯ ◯ ◯
┌─┬─┬─┬─┬─┐
│ │ │ │ │ │
├─┼─┼─┼─┼─┤
│ ◯ │ │ │ │
├─┼─┼─┼─┼─┤
◯ │ │ │ │ ◯
└─┴─┴─┴─┴─┘
```

That, my friend, is how we build a CLI in Rust.

# The End

Have you forgotten how to play a chord? Now we have a better tool:) Thanks for reading! As usual, source code in Github.

Check out the blog-post-checkpoint branch for code reference for this blog:

https://github.com/yzhong52/ascii_chord/tree/blog-post-checkpoint

Also, check out the master branch for the most update-to-date version of the CLI:

https://github.com/yzhong52/ascii_chord
