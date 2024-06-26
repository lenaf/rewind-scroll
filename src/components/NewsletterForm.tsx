
import Button from "@/components/Button";
import Input from "./Input";
import Select from "./Select";

export default function NewsletterForm() {
  return (
    <form className="max-w-sm mx-auto">
      <div className="flex">
        <Input
          id='first-name'
          label='First Name'
          className="input-primary w-full max-w-xs mb-4"
          placeholder="First Name"
          type='text'
          required
        />
        <Input
          id='last-name'
          label='Last Name'
          className="input-primary w-full max-w-xs mb-4"
          placeholder="Last Name"
          type='text'
          required
        />
      </div>
      <Input
        id='email'
        label='Email'
        className="input-primary w-full max-w-xs mb-4"
        placeholder="name@gmail.com"
        type='email'
        required
      />
      <Select
        id='role'
        label="I am a..."
        className="select-primary w-full max-w-xs mb-4"
        required
      >
        <option value='' selected disabled>Choose an option</option>
        <option>GSA Advisor/School Faculty</option>
        <option>Youth Aged 13-21</option>
        <option>Youth Aged 5-12</option>
        <option>Parent</option>
        <option>Donor</option>
        <option>From a Communinity Organization</option>
      </Select>
      <Button type='submit'>Subscribe</Button>
    </form>
  );
}
