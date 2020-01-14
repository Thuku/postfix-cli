# Postfix cli

- postfix calculator cli

## installation

- clone this repository

### cd into the project directory

- install node modules
- `npm install`
- install the module globally using
  - `npm install -g .`

## Usage

- create a `.txt` file with your postfix expressions each on its own line
-  the last line in the file should have the character `q`
- The expressions should follow the following format
  ```
  expr: -?[0-9]+
  expr: expr expr (+|-|*|/)
  ```
- Example in the repository
  `stack.txt`
- run the cli by passing the file path using this command
  `postfixcli -p "file path"`
- eg run this command in this repository `postfixcli -p stack.txt`
