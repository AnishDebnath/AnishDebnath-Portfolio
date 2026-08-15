import React from 'react';
import { SectionHeader } from '../../components/common/SectionHeader';
import { FileText } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <div className="pt-8 sm:pt-12 max-w-[1085px] mx-auto px-4 sm:px-6">
            <SectionHeader
                title="CURRICULUM VITAE"
                subtitle="Full-Stack Developer Resume, Technical Stack & Project History"
                icon={<FileText className="w-6 h-6" />}
            />
        </div>
    );
};