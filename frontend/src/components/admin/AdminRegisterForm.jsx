import { useForm } from 'react-hook-form';
import { adminService } from '../../services/admin.service';

const AdminRegister = () => {
    const { register, handleSubmit, reset } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            studentEmail: '',
            password: '',
            program: '',
            age: '',
            favLanguage: '',
            address: ''
        }
    });

    const onSubmit = async (data) => {
        try {
            await adminService.registerStudent(data);
            reset();
        } catch (error) {
            console.error('Registration failed:', error);
        }
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Register New Student</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
                <input {...register("firstName")} placeholder="First Name" className="input input-bordered w-full" />
                <input {...register("lastName")} placeholder="Last Name" className="input input-bordered w-full" />
                <input {...register("studentEmail")} type="email" placeholder="Email" className="input input-bordered w-full" />
                <input {...register("password")} type="password" placeholder="Password" className="input input-bordered w-full" />
                <select {...register("program")} className="select select-bordered w-full">
                <option value="" disabled selected>Select a Program</option>
                    <option value="TECHNOLOGY">Technology</option>
                    <option value="HEALTHCARE">Healthcare</option>
                    <option value="BUSINESS">Business</option>
                </select>
                <input {...register("age")} type="number" placeholder="Age" className="input input-bordered w-full" />
                <select {...register("favLanguage")} placeholder="Favorite Language" className="select select-bordered w-full">
                    <option value="" disabled selected>Select a language</option>
                    <option value="NONE">None</option>
                    <option value="JAVA">Java</option>
                    <option value="SQL">SQL</option>
                    <option value="C#">C#</option>
                    <option value="JAVASCRIPT">JavaScript</option>
                </select>
                <input {...register("address")} placeholder="Address" className="input input-bordered w-full" />
                <button type="submit" className="btn btn-primary w-full">Register Student</button>
            </form>
        </div>
    );
};

export default AdminRegister;