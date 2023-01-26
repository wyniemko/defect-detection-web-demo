{ pkgs }: {
  deps = [
    pkgs.python39Packages.pip
    pkgs.mongodb-3_4
    pkgs.nodejs-16_x
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}