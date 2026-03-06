import React from "react";
import { Route } from "react-router-dom";
import AdminDashboard from '../admin/components/AdminDashboard/index.jsx';
import HomepageBanner from '../admin/components/HomepageBanner/index.jsx';
import AdminCourses from '../admin/components/AdminCourses/index.jsx';
import AdminInstructors from '../admin/components/AdminInstructors/index.jsx';
import AdminUsers from '../admin/components/AdminUsers/index.jsx';
import AdminPayments from '../admin/components/AdminPayments/index.jsx';
import AdminReports from '../admin/components/AdminReports/index.jsx';
import AdminUserCourses from '../admin/components/AdminUserCourses/index.jsx';
import ContactList from '../admin/components/ContactList/index.jsx';
import ContactReply from '../admin/components/ContactReply/index.jsx';
import Feedbacks from '../admin/components/Feedbacks/index.jsx';
import ReportedComments from '../admin/components/ReportedComments/index.jsx';

export default function AdminRoutes() {
  return (
    <Route path="admin">
      <Route index element={<AdminDashboard />} />
      <Route path="homepage-banner" element={<HomepageBanner />} />
      <Route path="courses" element={<AdminCourses />} />
      <Route path="instructors" element={<AdminInstructors />} />
      <Route path="users" element={<AdminUsers />} />
      <Route path="payments" element={<AdminPayments />} />
      <Route path="reports" element={<AdminReports />} />
      <Route path="user-courses" element={<AdminUserCourses />} />
      <Route path="contacts" element={<ContactList />} />
      <Route path="contacts/reply" element={<ContactReply />} />
      <Route path="feedbacks" element={<Feedbacks />} />
      <Route path="reported-comments" element={<ReportedComments />} />
    </Route>
  );
}
