import React from "react";
import { Card, CardContent } from "./card";
import { Button } from "./button";
import { MenuIcon, ShoppingCartIcon } from "lucide-react";

const Header = () => {
  return (
    <Card className="flex justify-between p-[1.875rem] items-center">
      <Button size="icon" variant="outline">
        <MenuIcon />
      </Button>

      <h1 className="text-lg font-semibold">
        <span className="text-primary">e-commerce </span> Store{" "}
      </h1>

      <Button size="icon" variant="outline">
        <ShoppingCartIcon />
      </Button>
    </Card>
  );
};

export default Header;
