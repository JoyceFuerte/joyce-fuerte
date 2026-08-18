import { Component } from '@angular/core';

interface Role {
    label: string;
    title: string;
    period: string;
    intro: string;
    items: string[];
    note: string;
}

@Component({
    selector: 'app-experience',
    imports: [],
    templateUrl: './experience.html',
    styleUrl: './experience.scss',
})
export class Experience {

    roles: Record<string, Role> = {
        intern: {
            label: 'Chapter 01',
            title: 'Quality Analyst - Intern',
            period: 'GrowMofo LTD · June–December 2021',
            intro:
                'Developed practical software quality assurance experience through functional testing, defect documentation, test case development, and requirements-based validation.',
            items: [
                'Performed manual testing of software applications to identify defects and ensure product quality before release',
                'Documented and reported bugs using a defect tracking tool, including steps to reproduce, severity, and expected vs. actual results',
                'Developed and maintained test cases and test plans based on functional requirements and user stories'
            ],
            note:
                'Manual Testing · Test Cases · Test Plans · Defect Tracking · Functional Testing'
        },

        trainee: {
            label: 'Chapter 02',
            title: 'Developer Trainee',
            period: 'Computer Professionals, Inc. · November 2022–February 2023',
            intro:
                'Built and maintained responsive applications while developing practical experience across frontend, backend, database, and validation workflows.',
            items: [
                'Built and maintained responsive applications end-to-end',
                'Designed and implemented form validation logic to improve data integrity',
                'Created and maintained user and role database structures',
                'Developed dynamic and reusable UI components'
            ],
            note:
                'Java · HTML · CSS · JavaScript · jQuery · Bootstrap · Oracle SQL'
        },

        current: {
            label: 'Chapter 03',
            title: 'Regular Developer',
            period: 'Computer Professionals, Inc. · February 2023–Present',
            intro:
                'Contributing to enterprise applications and digital experiences through full-stack development, API integration, code quality practices, and collaborative delivery.',
            items: [
                'Collaborated with cross-functional teams to deliver features on time within Scrum sprints',
                'Implemented coding best practices that improved code quality and long-term maintainability',
                'Led code reviews, giving and incorporating constructive feedback to raise team code standards',
                'Integrated APIs, expanding functionality and improving user reach significantly',
                'Contributed to NDBX redesign for core projects',
                'Maintained and enhanced the Corporate Website based on stakeholder requests',
                'Delivered UI/UX design work for AZ Assist',
                'Deployed applications through Jenkins CI/CD pipelines'
            ],
            note:
                'Java · Oracle SQL · PostgreSQL · Angular · ReactJS · HTML · CSS · JavaScript · TypeScript · Figma · Adobe Experience Manager · VS Code · Git · Jira · Postman'
        }
    };

    selectedRole = 'current';

    showRole(role: string): void {
        this.selectedRole = role;
    }

    get role(): Role {
        return this.roles[this.selectedRole];
    }
}