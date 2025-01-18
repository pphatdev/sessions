# Session Storage Utility

This project provides a set of utility functions for interacting with the browser's session storage. The `Sessions` class offers methods to set, get, update, remove, and clear session storage items, as well as retrieve all session storage keys.

## Installation

You can install the package via npm:

```bash
npm install @sophat/sessions
```

Or using yarn:

```bash
yarn add @sophat/sessions
```

Or using local via github

```bash
cd project_dir/packages && git clone https://github.com/pphatdev/sessions.git && npm link @sophat/sessions
```

## Usage

### Setting a Cookie

```typescript
import { Sessions } from '@sophat/sessions';

Sessions.setItem('key', 'value');
```

### Getting a Cookie

```typescript
const value = Sessions.getItem('key');
```

### Updating a Cookie

```typescript
Sessions.updateItem('key', 'newValue');
```

### Removing a Cookie

```typescript
Sessions.removeItem('key');
```

### Clearing All Cookies

```typescript
Sessions.clear();
```

### Getting All Cookie Keys

```typescript
const keys = Sessions.getKeys();
```

## License

This project is licensed under the MIT License.