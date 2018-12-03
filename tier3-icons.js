import '@polymer/polymer/polymer-legacy.js';
import '@polymer/iron-iconset-svg/iron-iconset-svg.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<iron-iconset-svg name="d2l-tier3" size="30" rtl-mirroring="true">
	<svg>
	  <defs>
		<g id="alert">
		  <path d="M29.79 27.11l-12.94-26C16.51.43 15.82 0 15.07 0h-.01c-.75 0-1.45.43-1.79 1.1L.21 27.1c-.31.62-.28 1.36.09 1.95.36.59 1.01.95 1.7.95h26c.69 0 1.34-.36 1.7-.95.36-.59.4-1.32.09-1.94zM2 28L15.06 2 28 28H2z"></path>
		  <path d="M17.96 13.39l-1 5C16.78 19.32 15.95 20 15 20s-1.78-.68-1.97-1.61l-.99-5c-.12-.59.03-1.2.42-1.66.38-.46.94-.73 1.54-.73h2c.6 0 1.16.27 1.54.73.39.46.54 1.07.42 1.66z"></path>
		  <circle cx="15" cy="24" r="2"></circle>
		</g>
		<g id="assignments" mirror-in-rtl="true">
		  <path d="M21.5,18H8.5a.5.5,0,0,1,0-1h13a.5.5,0,0,1,0,1Z"></path>
		  <path d="M21.5,15H8.5a.5.5,0,0,1,0-1h13a.5.5,0,0,1,0,1Z"></path>
		  <path d="M15.5,12h-7a.5.5,0,0,1,0-1h7a.5.5,0,0,1,0,1Z"></path>
		  <path d="M13.5,9h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z"></path>
		  <path d="M13.5,6h-5a.5.5,0,0,1,0-1h5a.5.5,0,0,1,0,1Z"></path>
		  <path d="M25.87,8a.833.833,0,0,0-.16-.21L18.21.29A.833.833,0,0,0,18,.13.983.983,0,0,0,17.5,0H8A4.012,4.012,0,0,0,4,4V22a4.012,4.012,0,0,0,4,4H22a4.012,4.012,0,0,0,4-4V8.5A.982.982,0,0,0,25.87,8ZM18,2.92,23.08,8H20a2.006,2.006,0,0,1-2-2ZM24,22a2.006,2.006,0,0,1-2,2H8a2.006,2.006,0,0,1-2-2V4A2.006,2.006,0,0,1,8,2h8V6a4.012,4.012,0,0,0,4,4h4Z"></path>
		  <path d="M21.5,21H8.5a.5.5,0,0,1,0-1h13a.5.5,0,0,1,0,1Z"></path>
		  <path d="M30,20v4a6.018,6.018,0,0,1-6,6H6a6.018,6.018,0,0,1-6-6V20a1,1,0,0,1,2,0v4a4,4,0,0,0,4,4H24a4,4,0,0,0,4-4V20a1,1,0,0,1,2,0Z"></path>
		</g>
		<g id="bookmark">
		  <path fill="none" d="M5 27.867V28"></path>
		  <path d="M26 4.79V18c0 .55-.45 1-1 1s-1-.45-1-1V4.79C24 3.26 22.74 2 21.21 2H8.79C7.26 2 6 3.26 6 4.79v23.08l.01-.01 6.4-4.67c.35-.25.83-.25 1.18 0L20 27.87V8c0-.55.45-1 1-1s1 .45 1 1v20c0 1.85-1.69 2.59-3.19 1.47L13 25.24l-5.8 4.23C5.69 30.59 4 29.85 4 28V4.79C4 2.15 6.15 0 8.79 0h12.42C23.85 0 26 2.15 26 4.79z"></path>
		</g>
		<g id="calendar">
		  <path d="M25.92 5H23V1c0-.55-.45-1-1-1s-1 .45-1 1v4H9V1c0-.55-.45-1-1-1S7 .45 7 1v4H4.08C1.84 5 0 6.84 0 9.08v16.84C0 28.16 1.84 30 4.08 30h21.84c2.24 0 4.08-1.84 4.08-4.08V9.08C30 6.84 28.16 5 25.92 5zM2 9.08C2 7.93 2.93 7 4.08 7h21.84C27.07 7 28 7.93 28 9.08V11H2V9.08zm26 16.84c0 1.15-.93 2.08-2.08 2.08H4.08C2.93 28 2 27.07 2 25.92V12h26v13.92z"></path>
		</g>
		<g id="chat" mirror-in-rtl="true">
		  <path d="M5.6 30a2.532 2.532 0 0 1-.96-.194A2.49 2.49 0 0 1 3.066 27.5l-.014-3.408a8.325 8.325 0 0 1-.867-.768 7.06 7.06 0 0 1-2.114-3.912A5.153 5.153 0 0 1 0 18.5c.035-4.353 4.79-7.958 11.06-8.437.43-.042.89-.063 1.44-.063 6.893 0 12.5 3.813 12.5 8.5S19.393 27 12.5 27a12.98 12.98 0 0 1-1.395-.066c-.343-.01-.754-.058-1.15-.106l-.055-.01-2.512 2.46A2.57 2.57 0 0 1 5.6 30zm6.9-18a12.232 12.232 0 0 0-1.25.055.984.984 0 0 1-.1 0c-5.164.4-9.124 3.15-9.15 6.4a3.413 3.413 0 0 0 .045.623 5.055 5.055 0 0 0 1.56 2.83 7.114 7.114 0 0 0 1.02.85 1 1 0 0 1 .426.815l.017 3.927a.486.486 0 0 0 .31.45.5.5 0 0 0 .612-.1l2.882-2.82a.993.993 0 0 1 .874-.27l.506.09c.288.034.643.077 1 .09A11.94 11.94 0 0 0 12.5 25c5.69 0 10.5-2.977 10.5-6.5S18.19 12 12.5 12zM26.667 11a1.737 1.737 0 0 1-1.067-.35l-1.716-1.28A13.364 13.364 0 0 1 22 9.5c-4.486 0-8-2.086-8-4.75 0-1.985 1.88-3.668 4.9-4.393A13.256 13.256 0 0 1 22 0c4.15 0 7.494 1.755 7.95 4.174 0 .023.014.084.017.108A3.928 3.928 0 0 1 30 4.75a3.6 3.6 0 0 1-1.556 2.866V9.25a1.76 1.76 0 0 1-.98 1.566 1.95 1.95 0 0 1-.797.184zm.133-1.953zM24.13 7.32a1.047 1.047 0 0 1 .614.2l1.7 1.267V7.1a1 1 0 0 1 .45-.835A2.08 2.08 0 0 0 28 4.75a1.905 1.905 0 0 0-.02-.236C27.753 3.316 25.292 2 22 2a11.222 11.222 0 0 0-2.628.3C17.386 2.778 16 3.784 16 4.75c0 1.3 2.566 2.75 6 2.75a11.23 11.23 0 0 0 1.958-.165.976.976 0 0 1 .173-.015z"></path>
		</g>
		<g id="check-circle">
		  <path d="M22.5 10.987c0 .4-.16.79-.45 1.06l-7.99 8c-.24.26-.64.44-1.06.44s-.82-.18-1.1-.48l-3.96-3.96c-.27-.26-.44-.65-.44-1.06 0-.41.17-.8.46-1.08.48-.51 1.56-.54 2.12.04l2.92 2.93 6.94-6.95c.52-.55 1.58-.56 2.14.02.25.24.42.63.42 1.04z"></path>
		  <path d="M15 2c7.168 0 13 5.832 13 13s-5.832 13-13 13S2 22.168 2 15 7.832 2 15 2m0-2C6.716 0 0 6.716 0 15s6.716 15 15 15 15-6.716 15-15S23.284 0 15 0z"></path>
		</g>
		<g id="chevron-down">
		  <path d="M29.122 11.118L17.12 23.12c-.58.59-1.35.88-2.12.88s-1.54-.29-2.12-.88L.878 11.118c-1.17-1.17-1.17-3.07 0-4.24 1.17-1.17 3.07-1.17 4.24 0L15 16.757l9.882-9.88c1.17-1.17 3.07-1.17 4.24 0 1.17 1.17 1.17 3.07 0 4.24z"></path>
		</g>
		<g id="chevron-left-circle">
		  <path d="M15 2c7.2 0 13 5.8 13 13s-5.8 13-13 13S2 22.2 2 15 7.8 2 15 2m0-2C6.7 0 0 6.7 0 15s6.7 15 15 15 15-6.7 15-15S23.3 0 15 0z"></path>
		  <path d="M10.3 14.3l6-6c.4-.4 1-.4 1.4 0s.4 1 0 1.4L12.4 15l5.3 5.3c.4.4.4 1 0 1.4-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-6-6c-.4-.4-.4-1 0-1.4z"></path>
		</g>
		<g id="chevron-left" mirror-in-rtl="true">
		  <path d="M18.882 29.122L6.88 17.12C6.29 16.54 6 15.77 6 15s.29-1.54.88-2.12L18.882.878c1.17-1.17 3.07-1.17 4.24 0 1.17 1.17 1.17 3.07 0 4.24L13.243 15l9.88 9.882c1.17 1.17 1.17 3.07 0 4.24-1.17 1.17-3.07 1.17-4.24 0z"></path>
		</g>
		<g id="chevron-right-circle">
		  <path d="M15 2A13 13 0 1 1 2 15 13.015 13.015 0 0 1 15 2m0-2a15 15 0 1 0 15 15A15 15 0 0 0 15 0z"></path>
		  <path d="M19.707 14.293l-6-6a1 1 0 0 0-1.414 1.414L17.586 15l-5.293 5.293a1 1 0 1 0 1.414 1.414l6-6a1 1 0 0 0 0-1.414z"></path>
		</g>
		<g id="chevron-right" mirror-in-rtl="true">
		  <path d="M11.118 29.122L23.12 17.12c.59-.58.88-1.35.88-2.12s-.29-1.54-.88-2.12L11.118.878c-1.17-1.17-3.07-1.17-4.24 0-1.17 1.17-1.17 3.07 0 4.24L16.757 15l-9.88 9.882c-1.17 1.17-1.17 3.07 0 4.24 1.17 1.17 3.07 1.17 4.24 0z"></path>
		</g>
		<g id="chevron-up">
		  <path d="M29.122 18.882L17.12 6.88C16.54 6.29 15.77 6 15 6s-1.54.29-2.12.88L.878 18.882c-1.17 1.17-1.17 3.07 0 4.24 1.17 1.17 3.07 1.17 4.24 0L15 13.243l9.882 9.88c1.17 1.17 3.07 1.17 4.24 0 1.17-1.17 1.17-3.07 0-4.24z"></path>
		</g>
		<g id="classes">
		  <path d="M2.668 21c-.462 0-.878.187-1.18.488-.3.302-.488.718-.488 1.18v4.664c0 .462.187.878.488 1.18.302.3.718.488 1.18.488h4.664c.462 0 .878-.187 1.18-.488.3-.302.488-.718.488-1.18v-4.664c0-.462-.187-.878-.488-1.18-.302-.3-.718-.488-1.18-.488H2.668zM3 23h4v4H3v-4zM2.668 1c-.462 0-.878.187-1.18.488-.3.302-.488.718-.488 1.18v4.664c0 .462.187.878.488 1.18.302.3.718.488 1.18.488h4.664c.462 0 .878-.187 1.18-.488.3-.302.488-.718.488-1.18V2.668c0-.462-.187-.878-.488-1.18C8.21 1.188 7.794 1 7.332 1H2.668zM3 3h4v4H3V3zM2.668 11c-.462 0-.878.187-1.18.488-.3.302-.488.718-.488 1.18v4.664c0 .462.187.878.488 1.18.302.3.718.488 1.18.488h4.664c.462 0 .878-.187 1.18-.488.3-.302.488-.718.488-1.18v-4.664c0-.462-.187-.878-.488-1.18-.302-.3-.718-.488-1.18-.488H2.668zM3 13h4v4H3v-4zM12.668 21c-.462 0-.878.187-1.18.488-.3.302-.488.718-.488 1.18v4.664c0 .462.187.878.488 1.18.302.3.718.488 1.18.488h4.664c.462 0 .878-.187 1.18-.488.3-.302.488-.718.488-1.18v-4.664c0-.462-.187-.878-.488-1.18-.302-.3-.718-.488-1.18-.488h-4.664zM13 23h4v4h-4v-4zM12.668 1c-.462 0-.878.187-1.18.488-.3.302-.488.718-.488 1.18v4.664c0 .462.187.878.488 1.18.302.3.718.488 1.18.488h4.664c.462 0 .878-.187 1.18-.488.3-.302.488-.718.488-1.18V2.668c0-.462-.187-.878-.488-1.18-.302-.3-.718-.488-1.18-.488h-4.664zM13 3h4v4h-4V3zM12.668 11c-.462 0-.878.187-1.18.488-.3.302-.488.718-.488 1.18v4.664c0 .462.187.878.488 1.18.302.3.718.488 1.18.488h4.664c.462 0 .878-.187 1.18-.488.3-.302.488-.718.488-1.18v-4.664c0-.462-.187-.878-.488-1.18-.302-.3-.718-.488-1.18-.488h-4.664zM13 13h4v4h-4v-4zM22.668 21c-.462 0-.878.187-1.18.488-.3.302-.488.718-.488 1.18v4.664c0 .462.187.878.488 1.18.302.3.718.488 1.18.488h4.664c.462 0 .878-.187 1.18-.488.3-.302.488-.718.488-1.18v-4.664c0-.462-.187-.878-.488-1.18-.302-.3-.718-.488-1.18-.488h-4.664zM23 23h4v4h-4v-4zM22.668 1c-.462 0-.878.187-1.18.488-.3.302-.488.718-.488 1.18v4.664c0 .462.187.878.488 1.18.302.3.718.488 1.18.488h4.664c.462 0 .878-.187 1.18-.488.3-.302.488-.718.488-1.18V2.668c0-.462-.187-.878-.488-1.18-.302-.3-.718-.488-1.18-.488h-4.664zM23 3h4v4h-4V3zM22.668 11c-.462 0-.878.187-1.18.488-.3.302-.488.718-.488 1.18v4.664c0 .462.187.878.488 1.18.302.3.718.488 1.18.488h4.664c.462 0 .878-.187 1.18-.488.3-.302.488-.718.488-1.18v-4.664c0-.462-.187-.878-.488-1.18-.302-.3-.718-.488-1.18-.488h-4.664zM23 13h4v4h-4v-4z"></path>
		</g>
		<g id="close-thick">
		  <path d="M29.12 24.88c1.17 1.17 1.17 3.07 0 4.24s-3.07 1.17-4.24 0L15 19.24l-9.88 9.88c-1.17 1.17-3.07 1.17-4.24 0s-1.17-3.07 0-4.24L10.76 15 .88 5.12C-.29 3.95-.29 2.05.88.88s3.07-1.17 4.24 0L15 10.76 24.88.88c1.17-1.17 3.07-1.17 4.24 0s1.17 3.07 0 4.24L19.24 15l9.88 9.88z"></path>
		</g>
		<g id="close">
		  <path d="M29.56 27.44c.59.59.59 1.53 0 2.12-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44L15 17.12 2.56 29.56c-.29.29-.68.44-1.06.44s-.77-.15-1.06-.44c-.59-.59-.59-1.53 0-2.12L12.88 15 .44 2.56c-.59-.58-.59-1.54 0-2.12.59-.59 1.53-.59 2.12 0L15 12.88 27.44.44c.59-.59 1.53-.59 2.12 0 .59.58.59 1.54 0 2.12L17.12 15l12.44 12.44z"></path>
		</g>
		<g id="course-progress-complete">
		  <path d="M22.5 10.987c0 .4-.16.79-.45 1.06l-7.99 8c-.24.26-.64.44-1.06.44s-.82-.18-1.1-.48l-3.96-3.96c-.27-.26-.44-.65-.44-1.06 0-.41.17-.8.46-1.08.48-.51 1.56-.54 2.12.04l2.92 2.93 6.94-6.95c.52-.55 1.58-.56 2.14.02.25.24.42.63.42 1.04z"></path>
		  <path d="M15 2c7.168 0 13 5.832 13 13s-5.832 13-13 13S2 22.168 2 15 7.832 2 15 2m0-2C6.716 0 0 6.716 0 15s6.716 15 15 15 15-6.716 15-15S23.284 0 15 0z"></path>
		</g>
		<g id="course-progress-in-progress" mirror-in-rtl="true">
		  <path d="M12.738 29.58a14.692 14.692 0 0 1-2.054-.473.75.75 0 1 1 .44-1.434c.604.185 1.22.327 1.844.424a.75.75 0 0 1-.23 1.482zm-5.255-1.89a14.832 14.832 0 0 1-1.732-1.199.75.75 0 0 1 .94-1.17c.493.397 1.013.757 1.557 1.08a.75.75 0 0 1-.765 1.29zM3.33 24.027a14.65 14.65 0 0 1-1.168-1.755.75.75 0 0 1 1.306-.74c.311.551.661 1.078 1.048 1.576a.75.75 0 1 1-1.186.919zM.8 18.996a14.984 14.984 0 0 1-.426-2.073.75.75 0 0 1 1.487-.197 13.489 13.489 0 0 0 .384 1.865.75.75 0 1 1-1.445.406zm-.47-5.564c.075-.7.2-1.393.374-2.074a.75.75 0 1 1 1.453.372 13.167 13.167 0 0 0-.336 1.861.75.75 0 1 1-1.491-.159zm1.637-5.338c.33-.621.703-1.218 1.117-1.786a.75.75 0 0 1 1.212.883 13.398 13.398 0 0 0-1.004 1.606.75.75 0 1 1-1.325-.703zm3.468-4.325a14.668 14.668 0 0 1 1.698-1.25.75.75 0 0 1 .8 1.27c-.535.337-1.044.712-1.524 1.121a.75.75 0 1 1-.974-1.141zm4.9-2.762a14.921 14.921 0 0 1 2.063-.525.75.75 0 1 1 .266 1.476 13.72 13.72 0 0 0-1.856.473.75.75 0 0 1-.473-1.424zm5.595.991a1 1 0 1 1 .14-1.996C23.896.556 30 7.097 30 15s-6.105 14.444-13.93 14.998a1 1 0 0 1-.14-1.996C22.707 27.522 28 21.852 28 15c0-6.853-5.292-12.523-12.07-13.002z"></path>
		</g>
		<g id="course-progress-not-started">
		  <path d="M15 2c7.168 0 13 5.832 13 13s-5.832 13-13 13S2 22.168 2 15 7.832 2 15 2zm0-1C7.268 1 1 7.268 1 15s6.268 14 14 14 14-6.268 14-14S22.732 1 15 1z"></path>
		</g>
		<g id="discussions" mirror-in-rtl="true">
		  <path d="M5 27.866V28M19.43 11c.86 0 1.57.71 1.57 1.57v8.86c0 .86-.71 1.57-1.57 1.57H11l-4 5v-5H3.57C2.71 23 2 22.29 2 21.43v-8.86c0-.86.71-1.57 1.57-1.57h15.86m0-2H3.57C1.602 9 0 10.6 0 12.57v8.86C0 23.398 1.602 25 3.57 25H5v3c0 .85.536 1.606 1.338 1.887.217.076.44.113.662.113.596 0 1.175-.267 1.562-.75l3.4-4.25h7.47C21.4 25 23 23.398 23 21.43v-8.86C23 10.6 21.397 9 19.43 9z"></path>
		  <path d="M30 3.57v8.86C30 14.4 28.4 16 26.43 16H26c-.55 0-1-.45-1-1s.45-1 1-1h.43c.86 0 1.57-.71 1.57-1.57V3.57C28 2.71 27.29 2 26.43 2H10.57C9.71 2 9 2.71 9 3.57V6c0 .55-.45 1-1 1s-1-.45-1-1V3.57C7 1.6 8.6 0 10.57 0h15.86C28.4 0 30 1.6 30 3.57zM18.5 16h-14c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h14c.276 0 .5.224.5.5s-.224.5-.5.5zM14.5 19h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5z"></path>
		</g>
		<g id="download">
		  <path d="M30,12a8,8,0,0,1-8,8H19a1,1,0,0,1,0-2h3A6,6,0,0,0,22,6h-.07A8,8,0,0,0,8.07,6H8A6,6,0,0,0,8,18h3a1,1,0,0,1,0,2H8A8,8,0,0,1,7,4.07a10,10,0,0,1,16.1,0A8,8,0,0,1,30,12Z"></path>
		  <path d="M22,25a2,2,0,0,1-1,1.74l-5,3a2,2,0,0,1-2.06,0l-5-3A2,2,0,0,1,10,23h4V9a1,1,0,0,1,2,0V23h4A2,2,0,0,1,22,25Z"></path>
		</g>
		<g id="email-open" mirror-in-rtl="true">
		  <path d="M29.99 14.91v-.01c.05-.34-.07-.7-.36-.93L26 11.02V4c0-2.21-1.79-4-4-4H8C5.79 0 4 1.79 4 4v7.02L.37 13.97c-.29.23-.41.59-.36.93v.01C0 14.94 0 14.97 0 15v12c0 1.65 1.35 3 3 3H27c1.65 0 3-1.35 3-3V15c0-.03 0-.06-.01-.09zm-2.85-.38l-1.14.7V13.6l1.14.93zM6 4c0-1.1.9-2 2-2H22c1.1 0 2 .9 2 2v12.46L15 22l-9-5.54c.002 0 .002-12.46.002-12.46zm-2 9.6v1.63l-1.14-.7 1.14-.93zM28 27c0 .54-.46 1-1 1H3c-.54 0-1-.46-1-1V16.35l11.95 7.35c.32.2.69.3 1.05.3.36 0 .73-.1 1.05-.3L28 16.35V27z"></path>
		  <path d="M21.5 7h-13c-.276 0-.5-.224-.5-.5s.225-.5.5-.5h13c.276 0 .5.224.5.5s-.224.5-.5.5zM18 9.5c0 .28-.22.5-.5.5h-9c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h9c.28 0 .5.22.5.5zM14 12.5c0 .28-.22.5-.5.5h-5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h5c.28 0 .5.22.5.5z"></path>
		</g>
		<g id="email">
		  <path d="M27 6H3C1.35 6 0 7.35 0 9v12c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3V9c0-1.65-1.35-3-3-3zm1 2l-13 8L2 8h26zm0 13c0 .54-.46 1-1 1H3c-.54 0-1-.46-1-1V10.35l11.95 7.35c.32.2.69.3 1.05.3s.73-.1 1.05-.3L28 10.35V21z"></path>
		</g>
		<g id="file-presentation" mirror-in-rtl="true">
		  <path d="M29 3H16V1a1 1 0 0 0-2 0v2H1a1 1 0 0 0 0 2h1v10a7.02 7.02 0 0 0 7 7h5v1.53l-5.64 4.7a1.01 1.01 0 0 0-.13 1.41A.99.99 0 0 0 9 30a1.025 1.025 0 0 0 .64-.23L14 26.14V29a1 1 0 0 0 2 0v-2.86l4.36 3.63A1.025 1.025 0 0 0 21 30a.99.99 0 0 0 .77-.36 1.01 1.01 0 0 0-.13-1.41L16 23.53V22h5.03a7.02 7.02 0 0 0 7-7V5H29a1 1 0 0 0 0-2zm-3 12a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V5h22z"></path>
		  <rect x="8" y="13" width="2" height="4" rx="1" ry="1"></rect>
		  <rect x="12" y="11" width="2" height="6" rx="1" ry="1"></rect>
		  <rect x="16" y="9" width="2" height="8" rx="1" ry="1"></rect>
		  <rect x="20" y="7" width="2" height="10" rx="1" ry="1"></rect>
		</g>
		<g id="game">
		  <path d="M18,17a1,1,0,1,1-1,1,1,1,0,0,1,1-1Zm0-1a2,2,0,1,0,2,2,2,2,0,0,0-2-2Z"></path>
		  <path d="M9,17a1,1,0,0,1,1,1v2h2a1,1,0,0,1,0,2H10v2a1,1,0,0,1-2,0V22H6a1,1,0,0,1,0-2H8V18a1,1,0,0,1,1-1Zm0-1a2,2,0,0,0-2,2v1H6a2,2,0,0,0,0,4H7v1a2,2,0,0,0,4,0V23h1a2,2,0,0,0,0-4H11V18a2,2,0,0,0-2-2Z"></path>
		  <path d="M24,17a1,1,0,1,1-1,1,1,1,0,0,1,1-1Zm0-1a2,2,0,1,0,2,2,2,2,0,0,0-2-2Z"></path>
		  <path d="M18,23a1,1,0,1,1-1,1,1,1,0,0,1,1-1Zm0-1a2,2,0,1,0,2,2,2,2,0,0,0-2-2Z"></path>
		  <path d="M24,23a1,1,0,1,1-1,1,1,1,0,0,1,1-1Zm0-1a2,2,0,1,0,2,2,2,2,0,0,0-2-2Z"></path>
		  <path d="M24,12H16.01c0-.29,0-.63-.01-1V10c0-.96,0-1.73.01-1.93V7.93c.02-.77.04-1.22.36-1.53.537-.52,1.518-.312,2.187-.545A2.169,2.169,0,0,0,20,3.881c0-.719.031-1.437.017-2.156,0-.242-.01-.483-.017-.725a1,1,0,0,0-1.01-1A.994.994,0,0,0,18,1c0,.658-.007,1.343,0,2a2.12,2.12,0,0,1-.088.933.134.134,0,0,1-.044.058.142.142,0,0,1-.061.016,8.043,8.043,0,0,0-1.611.244,3.173,3.173,0,0,0-1.212.707,3.831,3.831,0,0,0-.97,2.94v.13C14,8.23,14,9.03,14,10c0,.35,0,.69.01,1v1H6a6.018,6.018,0,0,0-6,6v6a6.018,6.018,0,0,0,6,6H24a6.018,6.018,0,0,0,6-6V18A6.018,6.018,0,0,0,24,12Zm4,12a4,4,0,0,1-4,4H6a4,4,0,0,1-4-4V18a4,4,0,0,1,4-4H24a4,4,0,0,1,4,4Z"></path>
		</g>
		<g id="gear">
		  <path d="M27.46 11h-1.2c-.22 0-.42-.23-.51-.46-.1-.22-.12-.52.04-.67l.85-.85c1-.99 1.04-2.54.07-3.52l-2.2-2.21c-.98-.96-2.53-.92-3.54.08l-.84.84c-.11.12-.38.15-.61.07-.28-.09-.52-.34-.52-.54v-1.2C19 1.09 17.95 0 16.56 0h-3.12C12.05 0 11 1.09 11 2.54v1.2c0 .2-.24.45-.52.54-.23.08-.5.05-.61-.07l-.84-.84c-1.01-1-2.56-1.04-3.54-.08L3.29 5.5c-.97.98-.93 2.53.07 3.52l.85.85c.16.15.14.45.04.67-.09.23-.29.46-.51.46h-1.2C1.12 11 0 12.07 0 13.44v3.12C0 17.93 1.12 19 2.54 19h1.2c.22 0 .41.22.5.43.1.22.13.52-.03.7l-.85.85c-.47.47-.74 1.08-.77 1.72-.04.68.22 1.32.7 1.81l2.2 2.2c.5.49 1.15.73 1.82.71.63-.03 1.24-.31 1.72-.78l.84-.84c.13-.14.38-.19.7-.04.1.04.19.09.26.17.07.06.17.18.17.33v1.18c0 1.44 1.07 2.56 2.44 2.56h3.12c1.37 0 2.44-1.12 2.44-2.56v-1.18c0-.15.1-.27.17-.33.07-.08.16-.13.26-.17.32-.15.57-.1.7.04l.84.84c.48.47 1.09.75 1.72.78.67.02 1.32-.22 1.82-.71l2.2-2.2c.48-.49.74-1.13.7-1.81-.03-.64-.3-1.25-.77-1.72l-.85-.85c-.16-.18-.13-.48-.03-.7.09-.21.28-.43.5-.43h1.2c1.42 0 2.54-1.07 2.54-2.44v-3.12c0-1.37-1.12-2.44-2.54-2.44zm.54 5.56c0 .35-.34.44-.54.44h-1.2c-.99 0-1.89.62-2.33 1.62-.44.99-.3 2.11.36 2.84l.09.1.84.84c.12.11.19.26.2.39 0 .12-.04.21-.13.3l-2.2 2.2c-.09.1-.19.13-.3.13-.14 0-.28-.07-.4-.2l-.84-.84c-.46-.46-1.09-.71-1.77-.71-.38 0-.79.09-1.14.25-.31.12-.63.33-.88.58-.49.47-.76 1.1-.76 1.76v1.18c0 .21-.09.56-.44.56h-3.12c-.35 0-.44-.35-.44-.56v-1.18c0-.66-.27-1.29-.76-1.76-.25-.25-.57-.46-.88-.58-.35-.16-.76-.25-1.14-.25-.68 0-1.31.25-1.77.71l-.84.84c-.12.13-.26.2-.4.2-.11 0-.21-.03-.3-.13l-2.2-2.2c-.09-.09-.13-.18-.13-.3.01-.13.08-.28.2-.39l.84-.84.09-.1c.66-.73.8-1.85.36-2.84-.44-1-1.34-1.62-2.33-1.62h-1.2c-.2 0-.54-.09-.54-.44v-3.12c0-.35.34-.44.54-.44h1.2c1.01 0 1.94-.66 2.36-1.69.42-1.02.24-2.14-.47-2.86l-.86-.85c-.06-.06-.36-.39-.06-.69l2.19-2.2c.26-.25.57-.07.71.08l.84.84c.65.65 1.69.87 2.65.55 1.12-.36 1.9-1.37 1.9-2.44v-1.2c0-.25.12-.54.44-.54h3.12c.32 0 .44.29.44.54v1.2c0 1.07.78 2.08 1.9 2.44.96.32 2 .1 2.65-.55l.84-.84c.14-.15.45-.33.71-.08l2.19 2.2c.3.3 0 .63-.06.69l-.86.85c-.71.72-.89 1.84-.47 2.86.42 1.03 1.35 1.69 2.36 1.69h1.2c.2 0 .54.09.54.44v3.12z"></path>
		  <path d="M15 21c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm0-10c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"></path>
		</g>
		<g id="google-drive">
		  <path d="M.138,19.366l4.276,7.924A1.161,1.161,0,0,0,5.435,28L24.5,27.995a1.256,1.256,0,0,0,1.12-.657L29.9,19.416a1.324,1.324,0,0,0-.115-1.2L20.847,1.651A1.23,1.23,0,0,0,19.75,1H10.2a1.23,1.23,0,0,0-1.1.65L.152,18.208A1.228,1.228,0,0,0,.138,19.366ZM24.072,26H7.283l3.24-6H27.318ZM11.61,18l3.364-6.216L18.33,18Zm7.7-15L27.4,18H20.6L12.506,3Zm-8.877.372,3.4,6.3L5.5,25.1,2.1,18.8Z"></path>
		</g>
		<g id="grade">
		  <path d="M23.9 6.62c-.22-.84-.79-1.51-1.51-1.89.03-.81-.27-1.63-.88-2.24-.58-.58-1.31-.88-2.13-.88h-.11C18.89.89 18.22.33 17.38.1c-.25-.07-.52-.1-.77-.1-.58 0-1.13.17-1.61.47-.48-.3-1.03-.47-1.61-.47-.25 0-.52.03-.77.1-.84.23-1.51.79-1.89 1.51h-.1c-.82 0-1.56.29-2.14.88-.61.61-.91 1.43-.88 2.24-.72.38-1.29 1.05-1.51 1.89-.22.83-.07 1.69.37 2.38-.44.69-.59 1.55-.37 2.38.22.84.79 1.51 1.51 1.89-.03.81.27 1.63.88 2.24.43.43.95.71 1.51.82V28.5c0 .37.14.73.39 1.01.54.59 1.5.67 2.14.08L15 27.34l2.49 2.27c.28.25.64.39 1.01.39.43 0 .82-.17 1.11-.49.25-.28.39-.64.39-1.01V16.33c.57-.11 1.08-.39 1.51-.82.61-.61.91-1.43.88-2.24.72-.38 1.29-1.05 1.51-1.89.22-.83.07-1.69-.37-2.38.44-.69.59-1.55.37-2.38zM18 27.37l-3-2.73-3 2.73-.03-9.73c.2.11.42.2.65.26.25.07.52.1.77.1.58 0 1.13-.17 1.61-.47.48.3 1.03.47 1.61.47.26 0 .51-.03.77-.1.22-.06.42-.14.62-.24v9.71zm3.84-17.3c.15.24.2.53.13.8-.08.27-.26.49-.51.62l-1.12.59.05 1.27c.01.28-.09.55-.29.75-.03.03-.07.06-.1.09-.17.14-.36.2-.58.2h-.06l-1.28-.06-.08.15-.51.98c-.13.25-.35.43-.63.51-.08.02-.17.03-.25.03-.19 0-.38-.05-.54-.16L15 15.17l-1.07.67c-.16.11-.35.16-.54.16-.08 0-.17-.01-.26-.04-.27-.07-.49-.25-.62-.5l-.54-1.04-.05-.09-1.27.06h-.06c-.23 0-.42-.06-.59-.2-.03-.03-.07-.06-.1-.09-.2-.2-.3-.47-.29-.75l.05-1.27-1.12-.59c-.25-.13-.43-.35-.51-.62-.07-.27-.02-.56.13-.8L8.83 9l-.67-1.07c-.15-.24-.2-.53-.13-.8.08-.27.26-.49.51-.62l1.12-.59-.05-1.27c-.01-.28.09-.55.29-.75.2-.2.43-.29.77-.29l1.26.04.58-1.11c.13-.25.35-.43.63-.51.08-.02.17-.03.25-.03.19 0 .38.05.54.16l1.07.68 1.07-.68c.16-.11.35-.16.54-.16.08 0 .17.01.26.04.27.07.49.25.62.5l.63 1.11 1.26-.04c.29 0 .52.09.72.29.2.2.3.47.29.75l-.05 1.27 1.12.59c.25.13.43.35.51.62.07.27.02.56-.13.8L21.17 9l.67 1.07z"></path>
		  <path d="M15 6c1.657 0 3 1.343 3 3s-1.343 3-3 3-3-1.343-3-3 1.343-3 3-3m0-1c-2.205 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.795-4-4-4z"></path>
		</g>
		<g id="help">
		  <path d="M15 2c7.168 0 13 5.832 13 13s-5.832 13-13 13S2 22.168 2 15 7.832 2 15 2m0-2C6.716 0 0 6.716 0 15s6.716 15 15 15 15-6.716 15-15S23.284 0 15 0z"></path>
		  <path d="M22 11c0 3.53-2.6 6.44-6 6.92V21c0 .55-.45 1-1 1s-1-.45-1-1v-4c0-.55.45-1 1-1 2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5c0 .55-.45 1-1 1s-1-.45-1-1c0-3.87 3.13-7 7-7s7 3.13 7 7z"></path>
		  <circle cx="15" cy="25" r="1"></circle>
		</g>
		<g id="home">
		  <path d="M27 3v3c0 .55-.45 1-1 1s-1-.45-1-1V3h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c1.1 0 2 .9 2 2zM29.687 12.26S17.65.95 17.62.92C16.91.33 15.93 0 15 0s-1.91.33-2.62.92C12.35.95.314 12.26.314 12.26c-.4.38-.42 1.01-.04 1.42.19.21.46.32.73.32.24 0 .49-.09.68-.27 0 0 12.02-11.26 12.05-11.263C14.08 2.18 14.516 2 15 2c.444 0 .853.15 1.185.394.07.026 12.132 11.336 12.132 11.336.19.18.44.27.68.27.27 0 .54-.11.73-.32.38-.41.36-1.04-.04-1.42zM26 14c-.55 0-1 .45-1 1v11c0 1.1-.9 2-2 2h-4v-9c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v9H7c-1.1 0-2-.9-2-2V15c0-.55-.45-1-1-1s-1 .45-1 1v11c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4V15c0-.55-.45-1-1-1zm-9 14h-4v-9h4v9z"></path>
		</g>
		<g id="image">
		  <circle cx="13.5" cy="12.5" r="2.5"></circle>
		  <path d="M17.45 23.97l.05.03h.12l-.17-.03zM8.51 16c-.52 0-1.03.2-1.42.59L2.5 21.18v.04l4.49-4.48c.43-.45 1.01-.7 1.61-.73-.03-.01-.06-.01-.09-.01z"></path>
		  <path d="M30 8.53C29.77 6.54 28.08 5 26.03 5h-22c-2.2 0-4 1.79-4 4v13c0 .69.18 1.34.48 1.9.68 1.25 2.01 2.1 3.52 2.1h22c.28 0 .56-.03.83-.09 1.13-.23 2.08-.95 2.64-1.92v-.01c.21-.36.36-.76.45-1.18l.03-.2c.03-.19.05-.4.05-.6V9c0-.16-.01-.32-.03-.47zM4.03 24c-.43 0-.83-.13-1.16-.37L8.51 18l2.83 1.89L13.01 21l4.44 2.97.17.03H4.03zm22.75-.15c-.23.1-.49.15-.75.15h-5.04l-6.14-4.17L22.51 15l4.75 8.57c-.15.12-.31.21-.48.28zm1.25-3.02l-.53-.95-2.65-4.77-.28-.51-.32-.57c-.26-.48-.72-.83-1.25-.97-.16-.04-.33-.06-.49-.06-.38 0-.75.11-1.07.31l-8.23 5.19-.18.12-3.41-2.28c-.31-.21-.67-.32-1.02-.33-.6.03-1.18.28-1.61.73L2.5 21.22v-.04l-.47.47V9c0-.66.33-1.26.83-1.62.02-.01.04-.03.05-.04.32-.22.71-.34 1.12-.34h22c.34 0 .67.09.95.24 0 0 .01 0 .01.01.62.34 1.04 1 1.04 1.75v11.83z"></path>
		</g>
		<g id="lock-unlocked">
		  <path d="M15 18c0 .89-.38 1.69-1 2.23V24c0 1.1-.9 2-2 2s-2-.9-2-2v-3.77c-.62-.54-1-1.34-1-2.23 0-1.66 1.34-3 3-3s3 1.34 3 3z"></path>
		  <path d="M24 0h-1c-3.31 0-6 2.69-6 6v5H3c-1.65 0-3 1.35-3 3v13c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V14c0-1.65-1.35-3-3-3h-2V6c0-2.21 1.79-4 4-4h1c2.21 0 4 1.79 4 4v7c0 .55.45 1 1 1s1-.45 1-1V6c0-3.31-2.69-6-6-6zm-3 13c.54 0 1 .46 1 1v13c0 .54-.46 1-1 1H3c-.54 0-1-.46-1-1V14c0-.54.46-1 1-1h18z"></path>
		</g>
		<g id="lock">
		  <path d="M24 11h-1V6c0-3.31-2.69-6-6-6h-4C9.69 0 7 2.69 7 6v5H6c-1.65 0-3 1.35-3 3v13c0 1.65 1.35 3 3 3h18c1.65 0 3-1.35 3-3V14c0-1.65-1.35-3-3-3zM9 6c0-2.21 1.79-4 4-4h4c2.21 0 4 1.79 4 4v5H9V6zm16 21c0 .54-.46 1-1 1H6c-.54 0-1-.46-1-1V14c0-.54.46-1 1-1h18c.54 0 1 .46 1 1v13z"></path>
		  <path d="M15 15c-1.66 0-3 1.34-3 3 0 .89.38 1.69 1 2.23V24c0 1.1.9 2 2 2s2-.9 2-2v-3.77c.62-.54 1-1.34 1-2.23 0-1.66-1.34-3-3-3z"></path>
		</g>
		<g id="menu-hamburger">
		  <path d="M28.5 9h-27C.67 9 0 8.33 0 7.5S.67 6 1.5 6h27c.828 0 1.5.67 1.5 1.5S29.328 9 28.5 9zM28.5 17h-27C.67 17 0 16.328 0 15.5S.67 14 1.5 14h27c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5zM28.5 25h-27C.67 25 0 24.328 0 23.5S.67 22 1.5 22h27c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5z"></path>
		</g>
		<g id="menu">
		  <path d="M10.5 5h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5zm0 3h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5zm0 3h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5zm0 3h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5zm0 3h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5zm0 3h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5zm0 3h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5zm0 3h-6c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h6c.3 0 .5.2.5.5s-.2.5-.5.5z"></path>
		  <path d="M27 1H14.2c-.5-.6-1.3-1-2.2-1H3C1.3 0 0 1.3 0 3v24c0 1.7 1.3 3 3 3h9c.9 0 1.7-.4 2.2-1H27c1.7 0 3-1.3 3-3V4c0-1.7-1.3-3-3-3zM15 6h9.5c.3 0 .5.2.5.5v7.9l-7.7-4.8c-.2-.1-.5-.1-.6.1L15 11.3V6zm0 6.7l2.1-2.1 7 4.4H15v-2.3zM13 27c0 .6-.4 1-1 1H3c-.6 0-1-.4-1-1V3c0-.6.4-1 1-1h9c.6 0 1 .4 1 1v24zm15-1c0 .6-.4 1-1 1H15v-2h10.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H15v-2h10.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H15v-2h10.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5H15v-2h9.5c.8 0 1.5-.7 1.5-1.5v-8c0-.8-.7-1.5-1.5-1.5H15V3h12c.6 0 1 .4 1 1v22z"></path>
		  <circle cx="22" cy="9" r="1"></circle>
		</g>
		<g id="news">
		  <path d="M19 5v5H5V5h14zm0-1H5c-.55 0-1 .45-1 1v5c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zM10 14v11H5V14h5zm0-1H5c-.55 0-1 .45-1 1v11c0 .55.45 1 1 1h5c.55 0 1-.45 1-1V14c0-.55-.45-1-1-1zM20 14.5c0 .28-.22.5-.5.5h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5zM20 17.5c0 .28-.22.5-.5.5h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5zM20 20.5c0 .28-.22.5-.5.5h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5zM20 23.5c0 .28-.22.5-.5.5h-6c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h6c.28 0 .5.22.5.5z"></path>
		  <path d="M28 6h-4V2c0-1.1-.9-2-2-2H2C.9 0 0 .9 0 2v22c0 3.3 2.7 6 6 6h16c4.4 0 8-3.6 8-8V8c0-1.1-.9-2-2-2zm0 16c0 3.31-2.69 6-6 6H6c-2.21 0-4-1.79-4-4V2h20v20.89c0 .61.45 1.11 1 1.11s1-.5 1-1.11V8h4v14z"></path>
		</g>
		<g id="notification-bell">
		  <path fill="none" d="M25.532 23.71c-1.71-1.71-2.53-3.47-2.53-8.71 0-5.31-3.432-9-8.003-9s-8.004 3.69-8.004 9c0 5.24-.82 7-2.53 8.71-.11.1-.19.2-.25.29H25.78c-.058-.09-.138-.19-.248-.29z"></path>
		  <path d="M9.34 20.974c.263.087.546-.054.634-.316.3-.903.36-1.605.36-3.195 0-3.065.418-4.508 2.52-6.61.195-.194.195-.51 0-.706-.195-.195-.512-.195-.707 0-2.323 2.323-2.814 4.01-2.814 7.317 0 1.484-.052 2.11-.308 2.88-.088.26.054.543.316.63z"></path>
		  <path d="M26.942 22.29c-1.29-1.29-1.94-2.53-1.94-7.29 0-4.32-1.96-7.83-5-9.64V4C20 1.8 18.2 0 16 0h-2c-2.2 0-4 1.8-4 4v1.36C6.957 7.17 4.997 10.68 4.997 15c0 4.76-.65 6-1.94 7.29-1.51 1.51-1.51 3.71.7 3.71h6.34c.46 2.28 2.482 4 4.902 4s4.44-1.72 4.9-4h6.34c2.21 0 2.21-2.2.7-3.71zM12 4c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v.46c-.94-.3-1.95-.46-3-.46s-2.06.16-3 .46V4zm3 24c-1.3 0-2.41-.84-2.82-2h5.64c-.41 1.16-1.52 2-2.82 2zM4.218 24c.06-.09.14-.19.25-.29 1.71-1.71 2.53-3.47 2.53-8.71 0-5.31 3.43-9 8.002-9s8.002 3.69 8.002 9c0 5.24.82 7 2.53 8.71.11.1.19.2.25.29H4.22z"></path>
		</g>
		<g id="pause-borderless">
		  <path d="M9,30H4a4,4,0,0,1-4-4V4A4,4,0,0,1,4,0H9a4,4,0,0,1,4,4V26A4,4,0,0,1,9,30ZM4,2A2,2,0,0,0,2,4V26a2,2,0,0,0,2,2H9a2,2,0,0,0,2-2V4A2,2,0,0,0,9,2Z"></path>
		  <path d="M26,30H21a4,4,0,0,1-4-4V4a4,4,0,0,1,4-4h5a4,4,0,0,1,4,4V26A4,4,0,0,1,26,30ZM21,2a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2h5a2,2,0,0,0,2-2V4a2,2,0,0,0-2-2Z"></path>
		</g>
		<g id="pause">
		  <path d="M26,2a2,2,0,0,1,2,2V26a2,2,0,0,1-2,2H4a2,2,0,0,1-2-2V4A2,2,0,0,1,4,2H26m0-2H4A4,4,0,0,0,0,4V26a4,4,0,0,0,4,4H26a4,4,0,0,0,4-4V4a4,4,0,0,0-4-4Z"></path>
		  <path d="M12,10V20H10V10h2m0-2H10a2,2,0,0,0-2,2V20a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"></path>
		  <path d="M20,10V20H18V10h2m0-2H18a2,2,0,0,0-2,2V20a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V10a2,2,0,0,0-2-2Z"></path>
		</g>
		<g id="pic">
		  <path d="M15 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"></path>
		  <path d="M27.11 8.01C27.08 8 27.04 8 27 8h-6.44l-.7-1.74C19.55 5.5 18.82 5 18 5h-6c-.76 0-1.45.43-1.79 1.11L9.27 8H7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H3c-1.65 0-3 1.35-3 3v12c0 1.65 1.35 3 3 3h24c1.65 0 3-1.35 3-3V11c0-1.61-1.29-2.94-2.89-2.99zM28 23c0 .54-.46 1-1 1H3c-.54 0-1-.46-1-1v-9h7.35c-.23.63-.35 1.3-.35 2 0 3.31 2.69 6 6 6s6-2.69 6-6c0-.7-.12-1.37-.35-2H28v9zm-18-7c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm18-3h-7.81c-1.03-1.79-2.97-3-5.19-3s-4.16 1.21-5.19 3H2v-2c0-.54.46-1 1-1h6.88c.05 0 .1 0 .14-.01.31-.04.57-.23.72-.48.01-.03 1.05-2.05 1.09-2.1.18-.24.46-.41.79-.41h4.7c.41 0 .77.25.92.61l.72 1.78c.15.36.51.61.92.61H27c.09 0 .19.01.27.04.42.12.73.51.73.96v2z"></path>
		</g>
		<g id="play-borderless">
		  <path d="M7,2,25,15,7,28V2M7,0A2,2,0,0,0,5,2V28a2,2,0,0,0,3.17,1.62l18-13a2,2,0,0,0,0-3.24l-18-13A2,2,0,0,0,7,0Z"></path>
		</g>
		<g id="play">
		  <path d="M26 2c1.103 0 2 .897 2 2v22c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h22m0-2H4C1.8 0 0 1.8 0 4v22c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z"></path>
		  <path d="M12 9l9 6-9 6V9m0-2a2 2 0 0 0-2 2v12a2 2 0 0 0 3.11 1.664l9-6a2 2 0 0 0-.001-3.328l-9-6A1.997 1.997 0 0 0 12 7z"></path>
		</g>
		<g id="preview">
		  <path d="M29.422 22.59l-2.83-2.83c-.39-.39-.9-.59-1.42-.58-.17-.01-.34.02-.51.06l-.91-.91c.03-.04.06-.09.09-.13.02-.03.05-.07.07-.11.69-1.03 1.09-2.26 1.09-3.59 0-3.58-2.92-6.5-6.501-6.5-1.83 0-3.49.77-4.67 2H5.5c-.28 0-.5.22-.5.5s.22.5.5.5h7.531c-.39.6-.68 1.28-.85 2H5.5c-.28 0-.5.22-.5.5s.22.5.5.5h6.521c-.01.16-.02.33-.02.5 0 .52.06 1.02.18 1.5H5.5c-.28 0-.5.22-.5.5s.22.5.5.5h7.001c.31.75.77 1.43 1.33 2H5.5c-.28 0-.5.22-.5.5s.22.5.5.5h9.551c1 .63 2.18 1 3.45 1 1.45 0 2.79-.48 3.87-1.29l.87.95c-.17.67 0 1.4.52 1.93l2.83 2.83c.78.77 2.05.77 2.83 0 .772-.78.772-2.05.001-2.83zM18.502 19c-.14 0-.28-.01-.42-.02-.11-.01-.22-.02-.33-.05-.1-.01-.2-.03-.29-.06-.41-.09-.79-.24-1.14-.43-.11-.06-.22-.13-.33-.21-.12-.08-.24-.17-.35-.26-.12-.1-.24-.21-.35-.32-.09-.09-.17-.18-.25-.28-.1-.11-.19-.23-.27-.36-.06-.09-.12-.18-.17-.27-.08-.13-.15-.27-.21-.42-.05-.1-.09-.2-.12-.31 0 0-.01 0-.01-.01h4.74c1.1 0 2-.9 2-2s-.9-2-2-2h-4.24c.12-.17.24-.33.38-.48.09-.11.19-.21.3-.31.02-.02.04-.05.07-.06.1-.1.21-.19.32-.26.16-.13.34-.24.53-.35.15-.08.3-.15.46-.21l.15-.06c.1-.04.2-.07.31-.1.06-.02.12-.03.18-.05.15-.04.31-.06.47-.08.19-.03.38-.04.57-.04 2.48 0 4.5 2.02 4.5 4.5s-2.02 4.5-4.5 4.5z"></path>
		  <path d="M19.002 22.5c0 .28-.22.5-.5.5H5.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h13.001c.281 0 .501.22.501.5zM14.001 7.5c0 .28-.22.5-.5.5H5.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h8.001c.28 0 .5.22.5.5z"></path>
		  <path d="M22 6V4c0-1.1-.898-2-1.998-2H4c-1.1 0-2 .9-2 2v22c0 1.1.9 2 2 2h16.001c1.1 0 2-.9 2-2 0-.55.45-1 1-1s1 .45 1 1c0 1.1-.45 2.1-1.17 2.83-.73.72-1.73 1.17-2.83 1.17H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h16.001C22.212 0 24 1.79 24 4v2c0 .55-.45 1-1 1s-1-.45-1-1z"></path>
		</g>
		<g id="profile-default">
		  <path d="M15 0A15 15 0 0 0 2.5 23.29a14.627 14.627 0 0 0 1.27 1.64 14.972 14.972 0 0 0 22.46 0 14.627 14.627 0 0 0 1.27-1.64A15 15 0 0 0 15 0zm0 28a12.974 12.974 0 0 1-9.17-3.79c.29-.09.59-.17.89-.25.61-.16 1.24-.3 1.9-.42a9.75 9.75 0 0 0 12.72.04c.86.15 1.65.3 1.94.38s.6.16.89.25A12.974 12.974 0 0 1 15 28zm-2.95-6.94a9.99 9.99 0 0 0-1.31-2.84c-.31-.52-.62-1.05-.88-1.6a8.16 8.16 0 0 1-.36-6.3 5.963 5.963 0 0 1 3.32-3.43 6.05 6.05 0 0 1 2.18-.4 5.766 5.766 0 0 1 5.5 3.83 8.187 8.187 0 0 1-.36 6.31c-.26.54-.57 1.07-.88 1.59a9.745 9.745 0 0 0-1.31 2.84 3.808 3.808 0 0 0-.11.89 2.356 2.356 0 0 0 .05.48 1 1 0 0 0 .64.7c.23.02.8.11 1.47.22a8.75 8.75 0 0 1-10.03-.02c.56-.09 1.2-.17 1.52-.2a.994.994 0 0 0 .62-.7 2.513 2.513 0 0 0 .05-.51 3.56 3.56 0 0 0-.11-.86zm13.52 1.49c-.57-.19-1.16-.37-1.77-.53-.26-.07-.52-.13-.78-.19-.36-.08-.72-.16-1.09-.23-.35-.07-.7-.13-1.05-.19-.31-.03-.62-.07-.93-.1 0-.01.01-.03.01-.04a10.42 10.42 0 0 1 1.02-2.03c.33-.56.67-1.14.97-1.76a10.24 10.24 0 0 0 .42-7.87 7.906 7.906 0 0 0-4.42-4.56 8.05 8.05 0 0 0-5.9 0 7.906 7.906 0 0 0-4.42 4.56 10.212 10.212 0 0 0 .42 7.86c.3.63.64 1.21.97 1.77a10.707 10.707 0 0 1 1.02 2.03c0 .01.01.03.01.04-.31.03-.62.07-.93.1-.35.06-.7.12-1.05.19-.37.07-.73.15-1.09.23-.26.06-.52.12-.78.19-.61.16-1.2.34-1.77.53A13 13 0 1 1 28 15a12.905 12.905 0 0 1-2.43 7.55z"></path>
		</g>
		<g id="profile-pic">
		  <path d="M26,0H4A4.012,4.012,0,0,0,0,4V26a4.012,4.012,0,0,0,4,4H26a4.012,4.012,0,0,0,4-4V4A4.012,4.012,0,0,0,26,0Zm2,26a2.006,2.006,0,0,1-2,2H4a2.006,2.006,0,0,1-2-2V4A2.006,2.006,0,0,1,4,2H26a2.006,2.006,0,0,1,2,2Z"></path>
		  <path d="M25.15,22.16a5.3,5.3,0,0,0-3.08-1.68c-.75-.2-1.52-.37-2.29-.5-.35-.06-.7-.11-1.05-.16-.2-.02-.41-.05-.61-.07a4.591,4.591,0,0,1,.13-1.1,5.046,5.046,0,0,1,.37-1.16,7.036,7.036,0,0,1,.72-1.23,8.09,8.09,0,0,0,1.44-4.69c0-3.92-2.59-7.11-5.78-7.11S9.22,7.65,9.22,11.57a8.09,8.09,0,0,0,1.44,4.69,7.036,7.036,0,0,1,.72,1.23,5.046,5.046,0,0,1,.37,1.16,4.591,4.591,0,0,1,.13,1.1c-.2.02-.41.05-.61.07-.35.05-.7.1-1.05.16-.77.13-1.54.3-2.29.5a5.3,5.3,0,0,0-3.08,1.68A4.006,4.006,0,0,0,4,24.62V25a1,1,0,0,0,2,0v-.38a1.992,1.992,0,0,1,1.41-1.91.143.143,0,0,1,.06-.02c.24-.08.49-.15.73-.21.73-.14,1.45-.27,2.18-.4a4.828,4.828,0,0,0,9.24-.01c.34.07.67.13,1,.19.39.07.79.15,1.18.22.24.06.49.13.73.21a.143.143,0,0,1,.06.02A1.992,1.992,0,0,1,24,24.62V25a1,1,0,0,0,2,0v-.38A4.006,4.006,0,0,0,25.15,22.16ZM15,24.5a3.835,3.835,0,0,1-3.63-2.61c.18-.04.36-.08.55-.11a5.2,5.2,0,0,0,.86-.16,1.686,1.686,0,0,0,.99-1,1.616,1.616,0,0,0,.11-.58v-.3a7.364,7.364,0,0,0-.47-2.55,8.313,8.313,0,0,0-1.13-2.1,6.126,6.126,0,0,1-1.06-3.52c0-2.82,1.69-5.11,3.78-5.11s3.78,2.29,3.78,5.11a6.06,6.06,0,0,1-1.07,3.52,8.107,8.107,0,0,0-.72,1.18,7.921,7.921,0,0,0-.87,3.47v.3a1.616,1.616,0,0,0,.11.58,1.724,1.724,0,0,0,.61.8,4.282,4.282,0,0,0,1.79.47A3.835,3.835,0,0,1,15,24.5Z"></path>
		</g>
		<g id="quizzing">
		  <circle cx="21" cy="29" r="1"></circle>
		  <path d="M9.5,7h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z"></path>
		  <path d="M20,8.5a.5.5,0,0,1-.5.5H7.5a.5.5,0,0,1,0-1h12A.5.5,0,0,1,20,8.5Z"></path>
		  <path d="M9.5,12h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z"></path>
		  <path d="M9.5,17h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z"></path>
		  <path d="M9.5,22h-2a.5.5,0,0,1,0-1h2a.5.5,0,0,1,0,1Z"></path>
		  <path d="M13.5,14h-6a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"></path>
		  <path d="M13.5,19h-6a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"></path>
		  <path d="M13.5,24h-6a.5.5,0,0,1,0-1h6a.5.5,0,0,1,0,1Z"></path>
		  <path d="M27,16.5a5.5,5.5,0,0,1-5,5.47V25a1,1,0,0,1-2,0V21a1,1,0,0,1,1-1h.52A3.5,3.5,0,1,0,18,16.5V17a1,1,0,0,1-2,0v-.5a5.5,5.5,0,0,1,11,0Z"></path>
		  <path d="M25,4V8a1,1,0,0,1-2,0V4a2.006,2.006,0,0,0-2-2H7A2.006,2.006,0,0,0,5,4V26a2.006,2.006,0,0,0,2,2H17a1,1,0,0,1,0,2H7a4.012,4.012,0,0,1-4-4V4A4.012,4.012,0,0,1,7,0H21A4.012,4.012,0,0,1,25,4Z"></path>
		</g>
		<g id="rubric-graded">
		  <path d="M17.641,17.98l-9.89,11.5a1.488,1.488,0,0,1-1.13.52.277.277,0,0,1-.09-.01.22.22,0,0,1-.08.01,1.509,1.509,0,0,1-1.01-.39l-4.95-4.5a1.5,1.5,0,1,1,2.02-2.22l3.9,3.55,8.95-10.42a1.5,1.5,0,1,1,2.28,1.96Z"></path>
		  <path d="M26,0H4A4.012,4.012,0,0,0,0,4V20.85a3.5,3.5,0,0,1,1.505-.35A3.492,3.492,0,0,1,2,20.545V16H7v5H3.3a3.439,3.439,0,0,1,.556.411L5.6,23H6.729L9,20.356V16h3.741l1.1-1.282A3.48,3.48,0,0,1,16,13.551V9h5v5H18.3a3.417,3.417,0,0,1,1.547,2H21v5H17.681L14,25.28V28H11.661l-1.72,2H26a4.012,4.012,0,0,0,4-4V4A4.012,4.012,0,0,0,26,0ZM7,14H2V9H7ZM7,7H2V4A2.006,2.006,0,0,1,4,2H7Zm7,7H9V9h5Zm0-7H9V2h5Zm7,21H16V23h5ZM21,7H16V2h5Zm7,19a2.006,2.006,0,0,1-2,2H23V23h5Zm0-5H23V16h5Zm0-7H23V9h5Zm0-7H23V2h3a2.006,2.006,0,0,1,2,2Z"></path>
		</g>
		<g id="rubric">
		  <path d="M26,0H4A4.012,4.012,0,0,0,0,4V26a4.012,4.012,0,0,0,4,4H26a4.012,4.012,0,0,0,4-4V4A4.012,4.012,0,0,0,26,0ZM23,2h3a2.006,2.006,0,0,1,2,2V7H23Zm0,7h5v5H23Zm-4.7,5H16V9h5v5ZM14,21H9V16h5ZM21,7H16V2h5ZM9,2h5V7H9ZM9,9h5v5H9ZM2,4A2.006,2.006,0,0,1,4,2H7V7H2ZM2,9H7v5H2ZM7,28H4a2.006,2.006,0,0,1-2-2V23H7Zm0-7H2V16H7Zm2,2h5v5H9Zm12,5H16V23h5Zm0-7H16V16h5Zm7,5a2.006,2.006,0,0,1-2,2H23V23h5Zm0-5H23V16h5Z"></path>
		</g>
		<g id="scorm">
		  <path d="M10.11 16v2h-4v-2h4m0-1h-4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1z"></path>
		  <path d="M26.89 7H3.11A3.111 3.111 0 0 0 0 10.1a3.063 3.063 0 0 0 1.11 2.36v8.35A4.215 4.215 0 0 0 5.33 25h19.34a4.215 4.215 0 0 0 4.22-4.19v-8.35A3.063 3.063 0 0 0 30 10.1 3.111 3.111 0 0 0 26.89 7zm0 13.81A2.215 2.215 0 0 1 24.67 23H5.33a2.215 2.215 0 0 1-2.22-2.19v-7.62h23.78zm0-9.62H3.11a1.1 1.1 0 1 1 0-2.19h23.78a1.1 1.1 0 1 1 0 2.19z"></path>
		</g>
		<g id="search">
		  <path d="M28.828 23.17l-4.285-4.24c-.756-.75-1.765-1.17-2.854-1.17-.354 0-.707.05-1.04.14l-1.39-1.38c1.21-1.7 1.915-3.78 1.915-6.02 0-5.8-4.74-10.5-10.587-10.5S0 4.7 0 10.5 4.74 21 10.587 21c2.128 0 4.114-.63 5.768-1.71l1.452 1.44c-.1.33-.14.68-.14 1.03 0 1.07.412 2.08 1.18 2.83l4.274 4.24c.757.75 1.776 1.17 2.855 1.17 1.08 0 2.087-.42 2.854-1.17 1.56-1.56 1.56-4.1-.002-5.66zM2.018 10.5c0-4.69 3.84-8.5 8.57-8.5s8.57 3.81 8.57 8.5-3.842 8.5-8.57 8.5-8.57-3.81-8.57-8.5zm25.378 16.92c-.786.78-2.067.78-2.853 0l-4.275-4.25c-.383-.37-.585-.87-.585-1.41 0-.54.212-1.04.585-1.41.383-.38.887-.59 1.422-.59.544 0 1.05.21 1.432.59l4.275 4.24c.786.78.786 2.05 0 2.83z"></path>
		  <path d="M11 16.5c0 .28-.22.5-.5.5h-.01C6.9 16.99 4 14.09 4 10.5S6.9 4.01 10.49 4h.01c.28 0 .5.22.5.5s-.22.5-.5.5h-.01C7.46 5.01 5 7.47 5 10.5s2.46 5.49 5.49 5.5h.01c.28 0 .5.22.5.5z"></path>
		</g>
		<g id="stop-borderless">
		  <path d="M23,30H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0H23a7,7,0,0,1,7,7V23A7,7,0,0,1,23,30ZM7,2A5,5,0,0,0,2,7V23a5,5,0,0,0,5,5H23a5,5,0,0,0,5-5V7a5,5,0,0,0-5-5Z"></path>
		</g>
		<g id="stop">
		  <path d="M26 2c1.103 0 2 .897 2 2v22c0 1.103-.897 2-2 2H4c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h22m0-2H4C1.8 0 0 1.8 0 4v22c0 2.2 1.8 4 4 4h22c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4z"></path>
		  <path d="M20 10v10H10V10h10m0-2H10c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2z"></path>
		</g>
		<g id="syllabus" mirror-in-rtl="true">
		  <path d="M16.5 13h-10c-.276 0-.5-.224-.5-.5s.224-.5.5-.5h10c.276 0 .5.224.5.5s-.224.5-.5.5zM24 9.5c0 .28-.22.5-.5.5h-17c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h17c.28 0 .5.22.5.5z"></path>
		  <path d="M29 3H16V1c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h1v10c0 3.85 3.15 7 7 7h5v1.53l-5.64 4.7c-.42.35-.48.99-.13 1.41.2.24.48.36.77.36.23 0 .45-.08.64-.23L14 26.14V29c0 .55.45 1 1 1s1-.45 1-1v-2.86l4.36 3.63c.19.15.41.23.64.23.29 0 .57-.12.77-.36.35-.42.29-1.06-.13-1.41L16 23.53V22h5c3.85 0 7-3.15 7-7V5h1c.55 0 1-.45 1-1s-.45-1-1-1zm-3 12c0 2.76-2.24 5-5 5H9c-2.76 0-5-2.24-5-5V5h22v10z"></path>
		</g>
		<g id="upload">
		  <path d="M30,12a8,8,0,0,1-8,8H19a1,1,0,0,1,0-2h3A6,6,0,0,0,22,6h-.07A8,8,0,0,0,8.07,6H8A6,6,0,0,0,8,18h3a1,1,0,0,1,0,2H8A8,8,0,0,1,7,4.07a10,10,0,0,1,16.1,0A8,8,0,0,1,30,12Z"></path>
		  <path d="M22,13a2,2,0,0,0-1-1.74l-5-3a2,2,0,0,0-2.06,0l-5,3A2,2,0,0,0,10,15h4V29a1,1,0,0,0,2,0V15h4A2,2,0,0,0,22,13Z"></path>
		</g>
	  </defs>
	</svg>
  </iron-iconset-svg>`;

document.head.appendChild($_documentContainer.content);
