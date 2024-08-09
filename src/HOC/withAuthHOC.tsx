import Errorpage from "@/components/ui/Errorpage";
import { jwtdecode } from "@/utils/jwt-decode";
import React, { useEffect, useState } from "react";

interface WithAuthProps {
  role: string | null;
}

const withAuthHOC = <P extends object>(
  WrappedComponent: React.ComponentType<P & WithAuthProps>,
  allowedRole: string = ""
) => {
  const ComponentWithAuth: React.FC<P> = (props) => {
    const [role, setRole] = useState<string | null>(null);

    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        const decodedToken = jwtdecode(token);
        if (decodedToken?.role) setRole(decodedToken.role);
      }
    }, []);

    if (role !== allowedRole) {
      return (
        <Errorpage
          errorCode="404"
          errorTitle="You are not authorized"
          errorDescription="You tried to access a page you did not have prior authorization for."
        />
      );
    }

    return <WrappedComponent {...(props as P)} role={role} />;
  };

  return ComponentWithAuth;
};

export default withAuthHOC;
