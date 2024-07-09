export const LANGUAGE_VERSIONS = {
  javascript: "ES2024",
  typescript: "5.3",
  python: "3.12",
  java: "21",
  php: "8.3",
  ruby: "3.3"
}

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("JavaScript");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "TypeScript" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("Python")\n`,
  java: `\npublic class HelloWorld {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello World");\n\t}\n}\n`,
  php: "<?php\n\n$name = 'PHP';\necho $name;\n",
};