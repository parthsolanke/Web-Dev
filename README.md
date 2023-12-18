# Linux CLI Cheatsheet

## Shortcuts

| Key/Command | Description |
| ------------ | ----------- |
| Ctrl + A | Go to the beginning of the line |
| Ctrl + E | Go to the end of the line |
| Ctrl + L (Cmd + K) | Clears the screen |
| Ctrl + U | Cut everything backward to the beginning of the line |
| Ctrl + K | Cut everything forward to the end of the line |
| Ctrl + W | Cut one word backward using white space as delimiter |
| Ctrl + Y | Paste whatever was cut by the last cut command |
| Ctrl + H | Same as backspace |
| Ctrl + C | Kill whatever you are running and clear the current line |
| Ctrl + D | Exit the current shell or send EOF to a running process |
| Ctrl + Z | Suspend the running process, use 'fg' to restore |
| Ctrl + _ | Undo the last command (Ctrl + Shift + minus) |
| Ctrl + T | Swap the last two characters before the cursor |
| Ctrl + F | Move cursor one character forward |
| Ctrl + B | Move cursor one character backward |
| Option + → | Move cursor one word forward |
| Option + ← | Move cursor one word backward |
| Esc + T | Swap the last two words before the cursor |
| Esc + Backspace | Cut one word backward using non-alphabetic characters as delimiters |
| Tab | Auto-complete files and folder names |

## Core Commands

| Key/Command | Description |
| ------------ | ----------- |
| cd [folder] | Change directory (e.g., cd Documents) |
| cd | Home directory |
| cd ~ | Home directory |
| cd / | Root of drive |
| cd - | Previous directory |
| ls | Short listing |
| ls -l | Long listing |
| ls -a | Listing incl. hidden files |
| ls -lh | Long listing with Human readable file sizes |
| ls -R | Entire content of folder recursively |
| sudo [command] | Run command with superuser privileges |
| open [file] | Opens a file |
| top | Displays active processes (press 'q' to quit) |
| nano [file] | Opens the file using the nano editor |
| vim [file] | Opens the file using the vim editor |
| clear | Clears the screen |
| reset | Resets the terminal display |

## Chaining Commands

| Key/Command | Description |
| ------------ | ----------- |
| [command-a]; [command-b] | Run command A and then B, regardless of success of A |
| [command-a] && [command-b] | Run command B if A succeeded |
| [command-a] || [command-b] | Run command B if A failed |
| [command-a] & | Run command A in the background |

## Piping Commands

| Key/Command | Description |
| ------------ | ----------- |
| [command-a] \| [command-b] | Run command A and then pass the result to command B |

## Command History

| Key/Command | Description |
| ------------ | ----------- |
| history n | Shows the last n typed commands |
| Ctrl + r | Interactively search through previously typed commands |
| ![value] | Execute the last command typed that starts with 'value' |
| ![value]:p | Print the last command typed that starts with 'value' |
| !! | Execute the last command typed |
| !!:p | Print the last command typed |

## File Management

| Key/Command | Description |
| ------------ | ----------- |
| touch [file] | Create a new file |
| pwd | Full path to working directory |
| . | Current folder (e.g., ls .) |
| .. | Parent/enclosing directory (e.g., ls ..) |
| ls -l .. | Long listing of the parent directory |
| cd ../../ | Move 2 levels up |
| cat | Concatenate to the screen |
| rm [file] | Remove a file |
| rm -i [file] | Remove with confirmation |
| rm -r [dir] | Remove a directory and its contents |
| rm -f [file] | Force removal without confirmation |
| cp [file] [newfile] | Copy file to file |
| cp [file] [dir] | Copy file to directory |
| mv [file] [new filename] | Move/Rename |
| pbcopy < [file] | Copies file contents to clipboard |
| pbpaste | Paste clipboard contents |
| pbpaste > [file] | Paste clipboard contents into a file |

## Directory Management

| Key/Command | Description |
| ------------ | ----------- |
| mkdir [dir] | Create a new directory |
| mkdir -p [dir]/[dir] | Create nested directories |
| rmdir [dir] | Remove an empty directory |
| rm -R [dir] | Remove directory and contents |
| less [file] | Output file content in screensize chunks |
| [command] > [file] | Push output to file (overwrites) |
| [command] >> [file] | Append output to an existing file |
| [command] < [file] | Tell command to read content from a file |

## Search

| Key/Command | Description |
| ------------ | ----------- |
| find [dir] -name [search_pattern] | Search for files (e.g., find /Users -name "file.txt") |
| grep [search_pattern] [file] | Search for lines containing the pattern |
| grep -r [search_pattern] [dir] | Recursively search for lines containing the pattern |
| grep -v [search_pattern] [file] | Search for lines NOT containing the pattern |
| grep -i [search_pattern] [file] | Search for lines containing the case-insensitive pattern |
| mdfind [search_pattern] | Spotlight search for files |
| mdfind -onlyin [dir] -name [pattern] | Spotlight search in a specific directory for files named like pattern |

## Help

| Key/Command | Description |
| ------------ | ----------- |
| [command] -h | Offers help |
| [command] --help | Offers help |
| info [command] | Offers help |
| man [command] | Show the help manual for [command] |
| whatis [command] | Gives a one-line description of [command] |
| apropos [search-pattern] | Searches for a command with keywords in the description |
