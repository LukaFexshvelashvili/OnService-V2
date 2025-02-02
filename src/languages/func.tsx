import { useTranslation } from "react-i18next";
import { replace, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function LanguageRouteHandler() {
  const { i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  return null; // This component doesn't render anything
}

export default LanguageRouteHandler;
