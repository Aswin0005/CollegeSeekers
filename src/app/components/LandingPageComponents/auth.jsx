'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export default function Auth() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    location: '',
    preferredCourse: '',
    wantLoan: false,
    wantCalls: false,
    agreeToTerms: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (name, checked) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const openSignUp = () => {
    setIsLoginOpen(false);
    setIsSignUpOpen(true);
  };

  const openLogin = () => {
    setIsSignUpOpen(false);
    setIsLoginOpen(true);
  };

  return (
    <div className="flex flex-col md:flex-row gap-4">
      <Button onClick={openSignUp} className="bg-yellow-500 hover:bg-yellow-600">Register</Button> 
      <Button onClick={openLogin} className="border bg-transparent hover:bg-blue-800">Login</Button>

      {/* Sign Up Modal */}
      <Dialog open={isSignUpOpen} onOpenChange={setIsSignUpOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Sign Up
            </DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="fullName">
                Full Name <span className="text-red-500">*</span>
              </Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Enter Your name"
                value={formData.fullName}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">
                Email <span className="text-red-500">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="mobile">
                Mobile No. <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <Input className="w-16" value="+91" disabled />
                <Input
                  id="mobile"
                  name="mobile"
                  className="flex-1"
                  value={formData.mobile}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="location">
                Location <span className="text-red-500">*</span>
              </Label>
              <Select
                value={formData.location}
                onValueChange={(value) => handleSelectChange('location', value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Your State" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="preferredCourse">Preferred Course</Label>
              <Select
                value={formData.preferredCourse}
                onValueChange={(value) =>
                  handleSelectChange('preferredCourse', value)
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select Your Preferred Course" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="engineering">Engineering</SelectItem>
                  <SelectItem value="medical">Medical</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="wantLoan" className="flex-1">
                  Interested in availing a loan to assist with admissions
                </Label>
                <Switch
                  id="wantLoan"
                  checked={formData.wantLoan}
                  onCheckedChange={(checked) =>
                    handleSwitchChange('wantLoan', checked)
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="wantCalls" className="flex-1">
                  Receive calls from colleges about admissions.
                </Label>
                <Switch
                  id="wantCalls"
                  checked={formData.wantCalls}
                  onCheckedChange={(checked) =>
                    handleSwitchChange('wantCalls', checked)
                  }
                />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300"
                checked={formData.agreeToTerms}
                onChange={(e) =>
                  handleSwitchChange('agreeToTerms', e.target.checked)
                }
              />
              <Label htmlFor="terms" className="text-sm">
                I agree to the{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Terms & Conditions
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-600 hover:underline">
                  Privacy Policy
                </a>
              </Label>
            </div>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              type="submit"
            >
              Register For Free
            </Button>
            <p className="text-center text-sm">
              Already on Collegeseekers?{' '}
              <button
                onClick={openLogin}
                className="text-blue-600 hover:underline"
              >
                Login
              </button>
            </p>
          </form>
        </DialogContent>
      </Dialog>

      {/* Login Modal */}
      <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-semibold">
              Log In
            </DialogTitle>
          </DialogHeader>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="loginMobile">
                Mobile No. <span className="text-red-500">*</span>
              </Label>
              <div className="flex gap-2">
                <Input className="w-16" value="+91" disabled />
                <Input id="loginMobile" name="loginMobile" className="flex-1" />
              </div>
            </div>
            <Button
              className="w-full bg-blue-600 hover:bg-blue-700"
              type="submit"
            >
              Get OTP
            </Button>
            <p className="text-center text-sm">
              New to Collegeseekers?{' '}
              <button
                onClick={openSignUp}
                className="text-blue-600 hover:underline"
              >
                SignUp
              </button>
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
