import {StudModel} from './student.model.js';
import  {HodModel}  from './hod.model.js';
import { TeacherModel } from './teacher.model.js';
import { SecurityGuardModel } from './securityguard.model.js';
import { AdminModel } from './admin.model.js';
import { ParentModel } from './parents.model.js';
import { HostelModel } from './hostel.model.js';

const modelsMap = {
    student: StudModel,
    hod: HodModel,
    teacher: TeacherModel,
    securityguard: SecurityGuardModel,
    admin: AdminModel,
    parent: ParentModel,
    hostel: HostelModel
};

export default modelsMap;