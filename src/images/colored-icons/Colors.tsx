import * as React from 'react';
import { SVGProps } from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

const SvgColors = ({ title, titleId, ...props }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    role="img"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <g fill="none" fillRule="evenodd" transform="translate(2.197 2.92)">
      <circle cx={21.566} cy={13.271} r={13.271} fill="#FC521F" opacity={0.6} />
      <circle cx={13.271} cy={29.387} r={13.271} fill="#66BF3C" opacity={0.6} />
      <path
        fill="#FF5F95"
        d="M13.271 16.115c6.076 0 11.197 4.082 12.773 9.653a13.234 13.234 0 0 1-4.478.775c-6.075 0-11.197-4.082-12.772-9.653a13.235 13.235 0 0 1 4.477-.775Z"
      />
      <circle cx={30.335} cy={29.387} r={13.271} fill="#1EA7FD" opacity={0.6} />
      <path
        fill="#87E6E5"
        d="M21.803 19.22a13.243 13.243 0 0 1 4.74 10.167c0 4.08-1.842 7.731-4.74 10.166a13.242 13.242 0 0 1-4.74-10.166c0-4.026 1.793-7.634 4.624-10.068Z"
      />
      <path
        fill="#FBD178"
        d="M30.335 16.115c1.41 0 2.768.22 4.043.627-1.526 5.648-6.684 9.8-12.812 9.8-1.41 0-2.769-.22-4.044-.627 1.526-5.646 6.684-9.8 12.813-9.8Z"
      />
      <path
        fill="#FFF"
        d="m21.803 19.22.012.011c.163.137.322.277.477.422l-.1-.092c.078.07.155.142.23.214l-.13-.122c.08.073.159.148.237.224l-.106-.102c.07.068.141.136.21.206l-.104-.104c.086.084.171.17.255.256l-.15-.152.227.23v.001c.256.268.501.547.735.835l-.07-.085c.076.091.15.184.223.278l-.153-.193c.07.086.138.173.205.261l-.052-.068.182.239-.13-.171c.068.088.135.178.201.268l-.071-.097c.077.104.153.209.227.315l-.156-.218c.069.094.137.19.203.286l-.047-.068c.058.083.115.167.172.252l-.125-.184a13.27 13.27 0 0 1 .597.949l-.058-.1c.056.096.111.194.165.292l-.107-.192c.055.097.11.194.162.292a13.205 13.205 0 0 1 .707 1.541l-.064-.161c.035.087.07.175.102.264l-.039-.103c.04.103.078.206.115.31l-.076-.207c.04.108.08.217.117.326l-.041-.118c.033.092.064.185.095.279l-.054-.16c.039.112.076.226.112.34l-.058-.18c.034.104.067.208.099.313l.065.221-.037.014.037-.014a13.303 13.303 0 0 1-1.765.497l.063-.013c-.149.032-.298.06-.448.087l.384-.074c-.138.03-.277.056-.417.08l.033-.006a13.24 13.24 0 0 1-.465.074l.432-.068c-.156.027-.313.052-.47.073l.038-.005c-.133.019-.266.035-.4.05l.361-.045c-.154.022-.31.04-.466.056l.105-.01a13.34 13.34 0 0 1-.509.045l.404-.035c-.155.016-.31.03-.467.04l.063-.005c-.156.011-.312.02-.47.025l.407-.02c-.144.009-.289.016-.434.021h.027c-.16.005-.322.008-.484.008l-.45-.008a13.436 13.436 0 0 1-.969-.067l.045.005a13.292 13.292 0 0 1-.424-.05l.379.045a13.285 13.285 0 0 1-.455-.056l.076.01a13.246 13.246 0 0 1-.485-.075l.409.065a13.24 13.24 0 0 1-.458-.073l.05.008c-.13-.022-.26-.047-.388-.073l.338.065a13.206 13.206 0 0 1-.458-.09l.12.025a13.187 13.187 0 0 1-.496-.111l.376.086a13.184 13.184 0 0 1-.44-.102l.064.016c-.137-.034-.274-.07-.41-.108l.346.092c-.14-.035-.279-.072-.416-.111l-.398-.12.07-.247c.028-.098.057-.196.088-.293l-.029.093c.041-.133.084-.264.129-.395l-.1.302a13.158 13.158 0 0 1 .547-1.432l-.079.179a13.2 13.2 0 0 1 .139-.309l-.06.13c.037-.082.075-.164.114-.245l-.054.115c.05-.11.103-.22.157-.328l-.103.213c.05-.105.1-.209.152-.312l-.05.1c.042-.083.083-.165.126-.246a13.432 13.432 0 0 1 .88-1.447l-.117.17c.059-.087.119-.174.18-.26l-.063.09c.053-.077.108-.153.163-.23l-.1.14c.074-.104.15-.207.226-.308l-.126.169c.063-.087.128-.172.193-.257.316-.412.656-.804 1.017-1.175l-.19.198c.074-.079.15-.157.225-.234l-.035.036c.065-.067.13-.133.196-.198l-.161.162c.077-.079.155-.157.235-.234l-.074.072c.067-.066.135-.132.204-.197l-.13.125c.096-.093.194-.186.294-.277l-.164.152c.072-.068.145-.136.22-.202l-.056.05.27-.24.117-.1.03-.025Z"
      />
    </g>
  </svg>
);

export default SvgColors;
