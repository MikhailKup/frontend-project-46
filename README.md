### Hexlet tests and linter status:

[![Actions Status](https://github.com/MikhailKup/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/MikhailKup/frontend-project-46/actions)

### Test coverage:

[![Test Coverage](https://api.codeclimate.com/v1/badges/924e266fc9b4370101a2/test_coverage)](https://codeclimate.com/github/MikhailKup/frontend-project-46/test_coverage)

### Maintainability Badge:

[![Maintainability](https://api.codeclimate.com/v1/badges/924e266fc9b4370101a2/maintainability)](https://codeclimate.com/github/MikhailKup/frontend-project-46/maintainability)

# Difference Calculator

### Description

**Difference Calculator** - program that determines the difference between two data structures. This is a popular task, for which there are many online services, for example http://www.jsondiff.com/. A similar mechanism is used when outputting tests or automatically tracking changes in configuration files.

#### Utility features:

- [x] Supports different input formats: yaml, json
- [x] Generating a report in plain text, stylish и json

### Requirements:

Required [node.js](https://nodejs.org/en) version 18.18.0 and higher (you can check the version of installed node using the node -v terminal command).

### Installation:

1. Clone the repository using the following command:

```
git clone https://github.com/MikhailKup/frontend-project-46.git
```

2. Run the command:

```
npm link
```

3. Calling up help information:

```
gendiff -h
```

> ![Running gendiff -h](/demo/Picture1.png)

### Examples of work:

1. An example of working with flat JSON files:

```
gendiff flatFile1.json flatFile2.json
```

> ![Running gendiff flatFile1.json flatFile2.json](/demo/Picture2.png)

2. An example of working with flat YAML, YML files:

```
gendiff file1.yml file2.yml
```

> ![Running gendiff file1.yml file2.yml](/demo/Picture3.png)

3. An example of working with nested objects:

```
gendiff file1.json file2.json
```

> ![Running gendiff file1.json file2.json](/demo/Picture4.png)

4. An example of how the Plain format works:

```
gendiff -f plain file1.json file2.json
```

> ![Running gendiff -f plain file1.json file2.json](/demo/Picture5.png)

5. An example of how the JSON format works:

```
gendiff -f json file1.json file2.json
```

> ![Running gendiff -f json file1.json file2.json](/demo/Picture6.png)
