import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Form from './Form';

const Overlay = styled.div`
    position: fixed;
    z-index: 9999999;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(255, 255, 255, .4);
    @supports ((-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em))) {
        background-color: transparent;
        -webkit-backdrop-filter: blur(12px);
        backdrop-filter: blur(12px);
    }
    opacity: 0;
    transition: opacity 120ms linear;
    &.active {
        opacity: 1;
    }
`;

const Modal = styled.div`
    width: 420px;
    max-width: 98%;
    margin-bottom: 100px;
    background-color: #fff;
    box-sizing: border-box;
    padding: 24px;
    border-radius: 6px;
    box-shadow: 0px 1px 80px rgba(0,0,0,0.5);
    border: 1px solid #eee;
    opacity: 0;
    transition: opacity 1000ms linear;
    &.active {
        opacity: 1;
        transition-delay: 100ms;
    }
`;

const NewsletterModal = () => {
    const overlayRef = useRef(null);
    const [{ showing, shown }, setShowing] = useState({
        showing: false,
        shown: false,
    });

    useEffect(() => {
        const html = document.querySelector('html');
        if(html) {
            if (showing) {
                html.style.height = '100vh';
                html.style.width = '100vw';
                html.style.overflowY = 'hidden';
            } else {
                html.style.height = '';
                html.style.width = '';
                html.style.overflowY = '';
            }
        }
    }, [showing]);

    useEffect(() => {
        const ls = window.localStorage.getItem('kbg-newsletter');
        const secInWeek = 604800;
        let showAfterDismiss = true;

        if(ls) {
            const isDismissed = ls?.split(':');
            if (isDismissed[0] === 'dismissed') {
                showAfterDismiss = (Date.now() > Number(isDismissed[1]) + secInWeek);
            }
        }

        if (!shown && ls !== 'subscribed' && showAfterDismiss)
            setTimeout(() => {
                setShowing({
                    showing: true,
                    shown: true,
                });
            }, 5000);
    }, []);
    
    const closeModal = (success: Boolean = false) => {
        if(!success) {
            window.umami.trackEvent('dismissed', 'newsletter');
        }
        setShowing({
            showing: false,
            shown: true,
        })
    };

    const maybeClose = (e: any) => {
        if (e.target === overlayRef.current) {
            const isSubscribed = window.localStorage.getItem('kbg-newsletter') !== 'subscribed';
            if (isSubscribed) {
                window.localStorage.setItem('kbg-newsletter', `dismissed:${Date.now()}`);
                closeModal(false);
            } else {
                closeModal(true);
            }
        }  
    };

    if(!showing) return <></>;
    
    return <Overlay className={showing && 'active'} ref={overlayRef} onClick={maybeClose}>
        <Modal className={showing && 'active'}>
            <Form handleClose={closeModal} />
        </Modal>
    </Overlay>;
};

export default NewsletterModal;