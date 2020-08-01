import styled from 'styled-components';
import ReactPlayer from 'react-player'


export const Source = styled(ReactPlayer) `
    width: auto;

    > video {
        border-radius: 10px;
        outline: 0;
        
        box-shadow: 1px 1px 1px rgba(0,0,0,0.5)
    }
`

export const Container = styled.div `
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    main {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;

        h1 {
            align-self: center;
        }
    }

    section {
        margin-top: 5vh;
        width: 30%;
        box-shadow: 1px 1px 5px rgba(0,0,0, 0.3);
        margin-bottom: 25px;
    }

    img {
    width: 100%;
    border-radius: 8px 8px 0 0;

    box-shadow: 1px 1px 6px 1px #eaeaeab8;
  }
   h1 {
    text-transform: capitalize;
    font-size: 2em;

    padding: 10px;
  }
  h2 {
    align-self: flex-start;

    padding: 10px;
    margin-bottom: 15px;

    background: #335dff;
    color: #fff;

    span {
      font-weight: bold;
    }
  }
  p {
    letter-spacing: 0.8px;
    line-height: 2.8vh;

    padding: 10px;
  }

`

export const Button = styled.button `
    background: #eee;
    color: white;
    border-radius: 6px;
    box-shadow: 1px 2px 2px #eee;
    border: 0;
    outline: 0;

    margin-top: 5px;
    padding: 5px;

    font-size:20px;
    font-weight: bold;

    transition: 200ms ease-in;

  
`