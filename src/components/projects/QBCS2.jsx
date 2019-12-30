import React from 'react';

export default class QBCS2 extends React.Component {

    render() {
        const {project, viewCategory} = this.props;
        return <div className="showcase">
            <h3>Technologies</h3>
            <div className="meta">
                <div className="tags" title="Browse all projects with this technology">
                    { project.techs.map(tech => <span key={tech} className={tech.toLowerCase()} onClick={() => viewCategory(tech)}>{tech}</span>) }
                </div>
            </div>
            <h3>Description</h3>
            <div>
                Question Bank Checking System (Hệ thống quản lý và soạn thảo câu hỏi thi trắc nghiệm) is an application to help lecturers and head of department manage questions bank basing on their duty and courses. The system includes below main features:
                <ul>
                    <li>Import xml/gift/word questions and export to these ones.</li>
                    <li>Check duplicate questions or similar questions regarding text and image contents.</li>
                    <li>Help lecturers create quiz and categorize questions in units/chapters.</li>
                    <li>User could classify questions into several types such as basic knowledge or advanced knowledge</li>
                    <li>Statistics data</li>
                </ul>
                In the sescond season, we maintain and upgrade 90% of system functions, heavily on import questions and examinations core flow. We also implement new features:
                <ul>
                    <li>Support other format such as: multiple choice, matching, short answer, essay, fill in blank​, passage, listening question</li>
                    <li>Create question directly on QBCS without import from old Moodle system</li>
                    <li>Check duplicate audio by finding similarity between 2 audio contents</li>
                    <li>Review and verify examination process</li>
                </ul>
                Our project source code and data is confidential but document is public for everyone to view. Feel free to read it in the section below:
            </div>
            <h3>Document</h3>
            <iframe style={{height: '100vh'}} title={project.name} src={project.src} frameBorder="0"></iframe>
        </div>
    }
}