# Branch in git.

## Definition
Branch or Branching is a feature available in most modern version control systems which allows us to strip the main code base into two and expirement with the other without messing with the other one untill we are happy to combine the two.

Git branches are effectively a pointer to a snapshot of your changes. When you want to add a new feature or fix a bug no matter how big or how small you spawn a new branch to encapsulate your changes. This makes it harder for unstable code to get merged into the main code base, and it gives you the chance to clean up your future's history before merging it into the main branch.

<img src="./branch.svg" alt="git branch image">

## Branching commands
- ## `git branch`<br>
  This command will list all of the branches available in your repository. This is synonymous with git branch --list.

  ### Example
  ```bash
  $ git branch
  ```

- ## `git branch <name>`<br>
  This command allows you to create a new branch called ＜name＞.

  ### Syntax
  ```bash
  $ git branch <name>
  ```
  ### Example
  ```bash
  $ git branch feature
  ```
- ## `git branch -d <name>`<br>
  Delete the specified branch. This is a “safe” operation in that Git prevents you from deleting the branch if it has unmerged changes.

  ### Syntax
  ```bash
  $ git branch -d <name>
  ```
  ### Example
  ```bash
  $ git branch -d feature
  ```

- ## `git branch -D <name>`<br>
  Force delete the specified branch, even if it has unmerged changes. This is the command to use if you want to permanently throw away all of the commits associated with a particular line of development.

  ### Syntax
  ```bash
  $ git branch -D <name>
  ```
  ### Example
  ```bash
  $ git branch -D feature
  ```

- ## `git branch -m <name>`<br>
  Rename the current branch to ＜branch＞.

  ### Syntax
  ```bash
  $ git branch -m <new-name>
  ```
  ### Example
  ```bash
  $ git branch -m 04-bug-fix
  ```

- ## `git checkout <branch name>`<br>
  Switching to another branch within this repository.

  ### Syntax
  ```bash
  $ git checkout <branch-name>
  ```
  ### Example
  ```bash
  $ git checkout little-feature
  ```

