interface SvgProps {
  className?: string;
}
const MorningSvg = ({ className }: SvgProps) => (
  <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451M12 2V4M12 20V22M4 12H2M22 12H20M19.7778 4.22266L17.5558 6.25424M4.22217 4.22266L6.44418 6.25424M6.44434 17.5557L4.22211 19.7779M19.7778 19.7773L17.5558 17.5551"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const AfternoonSun = ({ className }: SvgProps) => (
  <svg className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.6667 7.28451C13.1454 7.10026 12.5844 7 12 7C9.2386 7 7 9.23858 7 12C7 14.7614 9.2386 17 12 17C14.7614 17 17 14.7614 17 12C17 11.4156 16.8997 10.8546 16.7155 10.3333M22 12H20M4 12H2M12 4V2M12 22V20M19.7773 19.7778L17.7458 17.5558M19.7773 4.22217L17.7458 6.44418M6.4443 6.44434L4.2221 4.22211M4.2227 19.7778L6.4449 17.5558"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

export { MorningSvg, AfternoonSun };
