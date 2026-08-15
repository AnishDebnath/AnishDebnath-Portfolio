import React from 'react';
import { SectionHeader } from '../../components/SectionHeader';
import { Mail } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <SectionHeader
            title="CONTACT"
            icon={<Mail className="w-6 h-6 stroke-[2.2]" />}
        />
    );
};