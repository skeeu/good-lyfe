import { styled } from "../../theme";

export const StyledHeader = styled('div', {
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    backgroundColor: '$primary',
})

export const StyledHeaderInner = styled('div', {
    paddingBlock: '8px',

    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white'
})