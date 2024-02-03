// FAQAccordion.tsx

import React, { useState } from 'react';
import * as S from './FAQAccordion.styles';
import { FaPlus } from "react-icons/fa";

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQAccordionProps {
    faqData: FAQItem[];
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ faqData }) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const handleToggleAccordion = (index: number) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    };

    return (
        <S.AccordionContainer>
            {faqData.map((item, index) => (
                <S.AccordionItem key={index}>
                    <S.AccordionQuestion onClick={() => handleToggleAccordion(index)}>
                        {item.question}
                        <S.ToggleIcon isOpen={activeIndex === index}>
                            <FaPlus />
                        </S.ToggleIcon>
                    </S.AccordionQuestion>
                    {activeIndex === index && (
                        <S.AccordionAnswer>{item.answer}</S.AccordionAnswer>
                    )}
                </S.AccordionItem>
            ))}
        </S.AccordionContainer>
    );
};

export default FAQAccordion;
