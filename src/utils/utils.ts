import { IDS } from "@/constants/constants";

export function scrollToElementById(id: string) {
  switch (id) {
    case IDS.CHOOSE_YOUR_NAME: {
      const section = document.getElementById(IDS.CHOOSE_YOUR_NAME);
      section?.scrollIntoView({ behavior: "smooth" });
      break;
    }
    case IDS.HOME: {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // Плавная прокрутка
      });
      break;
    }
  }
}

export function validateEmail(email: string) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
