export interface onOffGuide {
  prescription: string;
  pod: string;
  center: string;
  "on-guideline(%)": string;
  "off-guideline(%)": string;
}
export const reports: { name: string; description: string; url?: string }[] = [
  {
    name: "Percent of Prescriptions On and Off Guideline",
    description:
      "This report displays the percentage of medications your providers are prescribing that are recommended, on-guideline, by the CDS App and the percentage of medications your providers are prescribing that are not recommended, off-guideline, by the CDS App.Ret",
    url:
      "https://b2ff5l.axshare.com/reports_-_percent_of_prescriptions_skimmed.html",
  },
  {
    name: "Average Patient Cost for Diabetes Medication",
    description:
      "Displays the monthly cost of diabetes medication per patient prescribing that are recommended, on-guideline, by the CDS App and the percentage of medications your providers are prescribing that are not recommended, off-guideline, by the CDS App.Ret",
    url:
      "https://b2ff5l.axshare.com/reports_-_percent_of_prescriptions_skimmed.html",
  },
  {
    name: "Average Prescriptions per Session",
    description:
      "This report displays the average number of drugs that are pr prescribing that are recommended, on-guideline, by the CDS App and the percentage of medications your providers are prescribing that are not recommended, off-guideline, by the CDS App.Ret",
    url:
      "https://b2ff5l.axshare.com/reports_-_percent_of_prescriptions_skimmed.html",
  },
  {
    name: "Prescribed Drugs by Rx Class",
    description:
      "This report displays the average number of drugs that are pr prescribing that are recommended, on-guideline, by the CDS App and the percentage of medications your providers are prescribing that are not recommended, off-guideline, by the CDS App.Ret",
    url:
      "https://b2ff5l.axshare.com/reports_-_percent_of_prescriptions_skimmed.html",
  },
  {
    name: "CDS Application Utilization",
    description:
      "This report displays the average number of drugs that are pr prescribing that are recommended, on-guideline, by the CDS App and the percentage of medications your providers are prescribing that are not recommended, off-guideline, by the CDS App.Ret",
    url:
      "https://b2ff5l.axshare.com/reports_-_percent_of_prescriptions_skimmed.html",
  },
];

export const percentageReport: onOffGuide[] = [
  {
    prescription: "Dulaglutide (Trulicity)",
    pod: "All",
    center: "All",
    "on-guideline(%)": "100%",
    "off-guideline(%)": "0%",
  },
  {
    prescription: "Exenatide (Byetta)",
    pod: "All",
    center: "All",
    "on-guideline(%)": "100%",
    "off-guideline(%)": "0%",
  },
  {
    prescription: "Liraglutide (Saxenda)",
    pod: "All",
    center: "All",
    "on-guideline(%)": "99%",
    "off-guideline(%)": "0%",
  },
  {
    prescription: "Semaglutide (Ozempic)",
    pod: "All",
    center: "All",
    "on-guideline(%)": "100%",
    "off-guideline(%)": "0%",
  }
];
