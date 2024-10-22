Node.js is a JavaScript runtime environment that allows you to run JavaScript outside of your web browser.

First, we're going to install it using `nvm` (Node Version Manager), because it makes it easy to change Node versions and upgrade Node. There is another tool called `npm` that we will use later to install various libraries and tools used in JavaScript environments. Be careful to not confuse these two. 

To install nvm properly, install `curl`:

```
sudo apt install curl
```

You may need to update the Ubuntu package lists:

```
sudo apt update && sudo apt upgrade
```

Now download and install `nvm`:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
```

Initializing `nvm`:

```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

Check that `nvm` is installed:

```
command -v nvm
```

Now that we have installed `nvm`, we can install Node.

Run:

```
nvm install --lts
```

To tell `nvm` to use the most recent LTS version of Node installed on our computer, type:

```
nvm use --lts
```

This should complete the installation of Node.

For convenience, Node provides an interactive console which lets you run and edit your JavaScript code right in your terminal. This is quite helpful to debug or test small snippets of your code quickly without opening the browser every time. 

To run the Node console, open up your terminal and type `node`. Type `.exit` to quit the console.
