const heroData = {
  title: "Pink Bus",
  subTitle: "Safe and Secure",

  description:
    "A bus service for only girls.",
};

const accordionContent = [
  {
    question: "Idea behind this service?",
    answer: "I observed there is no proper transport for girls, So I made this prototype."
  },
  {
    question: "Is this service only for girls?",
    answer: "Obviously, for girls ☕. Driver and staff are also female."
  },
  {
    question: "Payment method?",
    answer: "Payment will be made on site. And 50% is off for disabled persons."
  },
]


const cities = [
  "Chakwal",
  "Dhudial",
  "Jatli",
  "Mandra",
  "Rawat",
  "Gulberg",
  "Faizabad",
];

enum City {
  Chakwal = "Chakwal",
  Dhudial = "Dhudial",
  Jatli = "Jatli",
  Mandra = "Mandra",
  Rawat = "Rawat",
  Gulberg = "Gulberg",
  Faizabad = "Faizabad",
}

export { heroData, cities, City, accordionContent };
