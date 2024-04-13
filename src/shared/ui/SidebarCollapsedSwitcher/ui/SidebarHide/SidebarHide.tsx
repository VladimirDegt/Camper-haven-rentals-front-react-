interface SidebarHideProps {
    fill?: string;
}

export const SidebarHide = ({ fill }: SidebarHideProps) => {
  return (
      <svg
          height="24px"
          width="24px"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 34.075 34.075"
          xmlSpace="preserve"
    >
          <g>
              <g>
                  <path
                      style={{ fill: fill }}
                      d="M24.57,34.075c-0.505,0-1.011-0.191-1.396-0.577L8.11,18.432c-0.771-0.771-0.771-2.019,0-2.79
			L23.174,0.578c0.771-0.771,2.02-0.771,2.791,0s0.771,2.02,0,2.79l-13.67,13.669l13.67,13.669c0.771,0.771,0.771,2.021,0,2.792
			C25.58,33.883,25.075,34.075,24.57,34.075z" />
              </g>
          </g>
      </svg>
  );
};