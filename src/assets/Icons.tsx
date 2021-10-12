import React from 'react'
import Icon from '@ant-design/icons';

const BedSvg = () => (
  <svg width="1.25em" height="1.25em" viewBox="0 0 25 14" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.75 7.5C4.725 7.5 5.6875 7.125 6.425 6.375C7.875 4.8875 7.85 2.525 6.375 1.075C5.6375 0.3625 4.6875 0 3.75 0C2.775 0 1.8125 0.375 1.075 1.125C-0.375 2.6125 -0.35 4.975 1.125 6.425C1.8625 7.1375 2.8125 7.5 3.75 7.5ZM2.8625 2.875C3.1 2.6375 3.4125 2.5 3.75 2.5C4.075 2.5 4.3875 2.625 4.625 2.85C5.125 3.3375 5.125 4.1125 4.65 4.6125C4.4 4.8625 4.0875 5 3.75 5C3.425 5 3.1125 4.875 2.875 4.65C2.375 4.15 2.375 3.375 2.8625 2.875ZM20 0H8.75V7.5H25V5C25 2.2375 22.7625 0 20 0ZM11.25 5V2.5H20C21.375 2.5 22.5 3.625 22.5 5H11.25ZM0 11.25H7.5V13.75H17.5V11.25H25V8.75H0V11.25Z" />
  </svg>
);

const WarningSvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 22 19" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M11 3.99L18.53 17H3.47L11 3.99ZM11 0L0 19H22L11 0ZM12 14H10V16H12V14ZM12 8H10V12H12V8Z" />
  </svg>
)

const DangerSvg = () => (
  <svg width="1em" height="1em" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.73 3H8.27L3 8.27V15.73L8.27 21H15.73L21 15.73V8.27L15.73 3ZM19 14.9L14.9 19H9.1L5 14.9V9.1L9.1 5H14.9L19 9.1V14.9Z" />
    <path d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z" />
    <path d="M11 7H13V14H11V7Z" />
  </svg>
)


export const BedIcon = (props: any) => <Icon component={BedSvg} {...props} />
export const WarningIcon = (props: any) => <Icon component={WarningSvg} {...props} />
export const DangerIcon = (props: any) => <Icon component={DangerSvg} {...props} />

