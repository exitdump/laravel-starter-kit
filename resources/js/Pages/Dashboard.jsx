import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Switch } from '@/components/ui/switch';
import { Head } from '@inertiajs/react';
import { useState } from 'react';

export default function Dashboard() {
     // Initialize the switch state
  const [isChecked, setIsChecked] = useState(false);

  // Handler for when the switch state changes
  const handleCheckedChange = (checked) => {
    console.log("Switch is now:", checked);
    setIsChecked(checked);
  };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            You're logged in! {isChecked ? "Switch is on" : "Switch is off"}
                        </div>
                        <Switch
                         checked={isChecked} 
                         onCheckedChange={handleCheckedChange}
                         >
                            CLick
                        </Switch>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
