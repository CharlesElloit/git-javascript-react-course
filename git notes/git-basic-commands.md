# GIT

## Definition
Git is version control system / software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing and managing the source code during software development process.

## What are the benefits of git.

- Keeping track of changes to code.
- Synchronizes code between different people.
- Testing or making changes to code without losing the original copy.
- Revert back to old version of the code.
- etc

## git commands

- ## `git clone`<br>
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

- ## `git add`<br>
  The git add command will add all the untrack file to what we call a staging area for it to be saved.

  ### Syntax 
  ```bash
  $ git add <filename / folder>
  ```
  ### Example
  ```bash
  $ git add index.html
  ```

- ## `git status`<br>
   This command will show you the status of this repository for example how many file is untrack or how many are staged and ready for commit or in other word save.

    ### Example
    ```bash
    $ git status
    ```

 - ## `git commit -m`<br>
   This command will commit which basically mean saving, all the changes made to the staged files or folders ready to be uploaded to Github.
   
    ### Syntax 
    ```bash
    $ git commit -m "message"
    ```
    ### Example
    ```bash
    $ git commit -m "Added index.html"
    ```

 - ## `git push` <br>
    This command will push as it says, all the committed files on your locally computer onto the remote repository on Github.

    ### Example
    ```bash
    $ git push
    ```

 - ## `git pull` <br>
    A git pull is the oposite of git push which pull or download all the new changes from the remote repository on your locally computer so that you can have all the updated code or files.

    ### Example
    ```bash
    $ git pull
    ```

 - ## `git log` <br>
    This command show all the commits logs or in other words the entire history of the commits you made in this repository, including the message, commit hash, arthur of the commit and the time the commit was made.

    ### Example
    ```bash
    $ git log
    ```

 - ## `git reflog` <br>
    This command show all the commits logs or in other words the entire history of the commits you made in this repository, 
    but with breif info about each commit not too detailed.

    ### Example
    ```bash
    $ git reflog
    ```
