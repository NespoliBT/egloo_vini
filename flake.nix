{
  description = "Vini Igloo - Flake";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils, ... }:
    flake-utils.lib.eachDefaultSystem (system:
      let pkgs = import nixpkgs { inherit system; };
      in {
        devShells.default = pkgs.mkShell {
          buildInputs = [ pkgs.nodejs pkgs.yarn ];

          shellHook = ''
            if [ ! -d node_modules ]; then
              yarn install
            fi
            yarn dev
          '';
        };
      });
}
