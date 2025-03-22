import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

enum CallStack {
    INACTIVE = 'INACTIVE',
    ACTIVE = 'ACTIVE',
    CONNECTING = 'CONNECTING',
    FINISHED = 'FINISHED'
}

const Agent = ({ userName }: AgentProps) => {
    const callStatus = CallStack.FINISHED;
    const isSpeaking = true;
    const messages = [
        'what is your name',
        'how are you',
    ];
    const lastMessage = messages[messages.length - 1];

    return (
        <>
            <div className='call-view mt-4'>
                <div className='card-interviewer'>
                    <div className='avatar'>
                        <Image src='/ai-avatar.png' alt="vapi" height={54} width={65} className='object-cover' />
                        {isSpeaking && <span className='animate-speak' />}
                    </div>
                    <h3>AI Interviewer</h3>
                </div>
                <div className='card-border'>
                    <div className='card-content'>
                        <Image src='/user-avatar.png' alt='user avatar' height={540} width={540} className='object-cover rounded-full size-[120px]' />
                        <h3>{userName}</h3>
                    </div>
                </div>
            </div>

            {messages.length > 0 && (
                <div className='transcript-border mt-4'>
                    <div className='transcript'>
                        <p key={lastMessage} className={cn('transition-opacity opacity-0 duration-500','animate-fadeIn opacity-100')}>{lastMessage}</p>
                    </div>
                </div>
            )}

            <div className='w-full flex justify-center mt-4'>
                {callStatus !== 'ACTIVE' ? (
                    <button className='btn-call relative'>
                        <span className={cn('absolute animate-ping rounded-full opacity-75',
                            callStatus !== 'CONNECTING' && 'hidden')}>
                        </span>
                        {callStatus === 'INACTIVE' || callStatus === 'FINISHED' ? 'Call' : '...'}
                    </button>
                ) : (
                    <button className='btn-disconnect'>
                        End
                    </button>
                )}
            </div>
        </>
    );
}

export default Agent;
