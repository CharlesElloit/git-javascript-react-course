<h2 style="font-size: 40px">Version Control Software.</h2>
<br>
<br>

<h2 style="font-size: 35px">Git.</h2>

## What is git?

Git is version control system / software for tracking changes in any set of files, usually used<br> for coordinating work among programmers collaboratively developing and managing the<br> source code during software development process.
<br>
<br>
<br>

## What are the benefits of git.

- Keeping track of changes to code.

- Synchronizes code between different people.

- Testing or making changes to code without losing the original copy.

- Revert back to old version of the code.

- etc
  <br>
  <br>

## What you will need.

- git software

- Setup account with Github.

- Code editor / IDE (Optional).

  <br>

## Where to get them?

<br>

## **Git**

<br>

### **Windows Users**

[https://git-scm.com/download/win](https://git-scm.com/download/win)
<br>
<br>

### **Mac Users**

First you need to install homebrew if you don't already have. by running this command in<br> your terminal.

```bash
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

For more info on how to install brew, look here: [https://brew.sh/](https://brew.sh/) but if you already have brew <br> installed then run this command below to install git.

```bash
$ brew install git
```

<br>

### **Linux users**

Linux already comes with git but if for any reason it doesn't,
Just run this command in your<br> terminal and git will be installed for you.

```bash
$ apt-get install git
```

  <br>

## Setup Github Account

<br>

To setup a Github account you head over to [github.com](https://github.com)

   <br>
   <br>
   <br>

<center>
<h2 style="font-size: 35px">Commands</h2>
</center>
   <br>
   <br>
   <br>

- ## `git clone`

  <br>

  The git clone command allows us to download code from a Github repository to our locally computer.

  ### Syntax

  ```bash
  $ git clone <url>
  ```

  ### Example

  ```bash
  $ git clone https://github.com/[username]/[repository name].git
  ```

  so this command will go head and download the code into your computer.
  <br>
  <br>
  <br>
  <br>
  <br>
  <br>

- ## `git add`

  <br>

  The git add command will add the untrack file(s) / folder(s) to what we call a staging<br> area.
  <br>

  ### Syntax

  <br>

  There are two ways to add a file(s) or folder(s)

  ```bash
  # First way

  $ git add <filename / folder> # this adds a single file or folder to the staging area.

  ```

  ```bash
  # Second way

  $ git add . # this adds all the files / folders to the staging area
  ```

  _Note:_
  This added file(s) / folder(s) are not yet saved when this command is run.

  ### Example

  ```bash
  $ git add index.html
  ```

  ```bash
  $ git add .
  ```

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>

- ## `git status`

  <br>

  This command will show you the status of this repository for example how many file is<br> untrack or how many are staged and ready for commit or in other word save.

  ### Example

  ```bash
  $ git status
  ```

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>

- ## `git commit -m`

  <br>

  This command will commit which basically mean saving, all the changes made to the<br> staged files or folders ready to be uploaded to Github.

  ### Syntax

  ```bash
  $ git commit -m "message"
  ```

  ### Example

  ```bash
  $ git commit -m "Added index.html"
  ```

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>

- ## `git push`

  <br>

  This command will push as it says, all the committed files on your locally computer<br> onto the remote repository on Github.

  ### Example

  ```bash
  $ git push
  ```

    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

- ## `git pull`

  <br>

  A git pull is the oposite of git push which pull or download all the new changes from<br> the remote repository on your locally computer so that you can have all the updated<br> code or files.

  ### Example

  ```bash
  $ git pull
  ```

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>

- ## `git log`

  <br>

  This command show all the commits logs or in other words the entire history of the<br> commits you made in this repository, including the message, commit hash, author of<br> the commit and the time the commit was made.

  ### Example

  ```bash
  $ git log
  ```

  <br>
  <br>
  <br>
  <br>
  <br>
  <br>

- ## `git reflog`

  <br>

  This command show all the commits logs or in other words the entire history of the<br> commits you made in this repository,
  but with breif info about each commit not too<br> detailed.

  ### Example

  ```bash
  $ git reflog
  ```
