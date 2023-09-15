import { styled } from '../../theme';

export const StoryList = styled('div', {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
    gap: '30px',
});

export const StoryCardWrapper = styled('div', {
    maxWidth: '350px',
    borderRadius: 10,
    background: '#FFF',
    boxShadow: '1px 4px 8px 0px rgba(0, 0, 0, 0.18)',

    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    textAlign: 'start',

    padding: '35px 32px',
});

export const StoryCardContent = styled('div', {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridTemplateRows: '1fr auto',
    gridGap: '14px',
});

export const StoryCardTextBox = styled('div', {
    color: '#424242',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: '32px',
});

export const StoryCardAva = styled('img', {
    width: '58px',
    height: '58px',

    borderRadius: '99999px',

    objectFit: 'cover',
});

export const StoryCardPersonBox = styled('div', {
    gridColumn: 2,

    display: 'flex',
    flexDirection: 'row',
    gap: '17px',
});
