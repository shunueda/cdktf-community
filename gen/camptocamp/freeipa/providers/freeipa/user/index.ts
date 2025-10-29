// https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#account_disabled User#account_disabled}
  */
  readonly accountDisabled?: boolean | cdktf.IResolvable;
  /**
  * Car License
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#car_license User#car_license}
  */
  readonly carLicense?: string[];
  /**
  * City
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#city User#city}
  */
  readonly city?: string;
  /**
  * Display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#display_name User#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#email_address User#email_address}
  */
  readonly emailAddress?: string[];
  /**
  * Employee Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#employee_number User#employee_number}
  */
  readonly employeeNumber?: string;
  /**
  * Employee Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#employee_type User#employee_type}
  */
  readonly employeeType?: string;
  /**
  * First name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#first_name User#first_name}
  */
  readonly firstName: string;
  /**
  * Full name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#full_name User#full_name}
  */
  readonly fullName?: string;
  /**
  * GECOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#gecos User#gecos}
  */
  readonly gecos?: string;
  /**
  * Group ID Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#gid_number User#gid_number}
  */
  readonly gidNumber?: number;
  /**
  * Home directory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#home_directory User#home_directory}
  */
  readonly homeDirectory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Initials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#initials User#initials}
  */
  readonly initials?: string;
  /**
  * Job Title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#job_title User#job_title}
  */
  readonly jobTitle?: string;
  /**
  * User password expiration [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#krb_password_expiration User#krb_password_expiration}
  */
  readonly krbPasswordExpiration?: string;
  /**
  * Kerberos principal expiration [RFC3339](https://datatracker.ietf.org/doc/html/rfc3339#section-5.8) format (see [RFC3339 time string](https://tools.ietf.org/html/rfc3339#section-5.8) e.g., `YYYY-MM-DDTHH:MM:SSZ`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#krb_principal_expiration User#krb_principal_expiration}
  */
  readonly krbPrincipalExpiration?: string;
  /**
  * Principal alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#krb_principal_name User#krb_principal_name}
  */
  readonly krbPrincipalName?: string[];
  /**
  * Last name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#last_name User#last_name}
  */
  readonly lastName: string;
  /**
  * Login shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#login_shell User#login_shell}
  */
  readonly loginShell?: string;
  /**
  * Manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#manager User#manager}
  */
  readonly manager?: string;
  /**
  * Mobile Telephone Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#mobile_numbers User#mobile_numbers}
  */
  readonly mobileNumbers?: string[];
  /**
  * UID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Org. Unit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#organisation_unit User#organisation_unit}
  */
  readonly organisationUnit?: string;
  /**
  * ZIP code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#postal_code User#postal_code}
  */
  readonly postalCode?: string;
  /**
  * Preferred Language
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#preferred_language User#preferred_language}
  */
  readonly preferredLanguage?: string;
  /**
  * State/Province
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#province User#province}
  */
  readonly province?: string;
  /**
  * Generate a random user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#random_password User#random_password}
  */
  readonly randomPassword?: boolean | cdktf.IResolvable;
  /**
  * SSH public key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#ssh_public_key User#ssh_public_key}
  */
  readonly sshPublicKey?: string[];
  /**
  * Street address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#street_address User#street_address}
  */
  readonly streetAddress?: string;
  /**
  * Telephone Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#telephone_numbers User#telephone_numbers}
  */
  readonly telephoneNumbers?: string[];
  /**
  * User ID Number (system will assign one if not provided)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#uid_number User#uid_number}
  */
  readonly uidNumber?: number;
  /**
  * User category (semantics placed on this attribute are for local interpretation)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#userclass User#userclass}
  */
  readonly userclass?: string[];
  /**
  * Prompt to set the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#userpassword User#userpassword}
  */
  readonly userpassword?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user freeipa_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/camptocamp/freeipa/1.0.0/docs/resources/user freeipa_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_user',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountDisabled = config.accountDisabled;
    this._carLicense = config.carLicense;
    this._city = config.city;
    this._displayName = config.displayName;
    this._emailAddress = config.emailAddress;
    this._employeeNumber = config.employeeNumber;
    this._employeeType = config.employeeType;
    this._firstName = config.firstName;
    this._fullName = config.fullName;
    this._gecos = config.gecos;
    this._gidNumber = config.gidNumber;
    this._homeDirectory = config.homeDirectory;
    this._id = config.id;
    this._initials = config.initials;
    this._jobTitle = config.jobTitle;
    this._krbPasswordExpiration = config.krbPasswordExpiration;
    this._krbPrincipalExpiration = config.krbPrincipalExpiration;
    this._krbPrincipalName = config.krbPrincipalName;
    this._lastName = config.lastName;
    this._loginShell = config.loginShell;
    this._manager = config.manager;
    this._mobileNumbers = config.mobileNumbers;
    this._name = config.name;
    this._organisationUnit = config.organisationUnit;
    this._postalCode = config.postalCode;
    this._preferredLanguage = config.preferredLanguage;
    this._province = config.province;
    this._randomPassword = config.randomPassword;
    this._sshPublicKey = config.sshPublicKey;
    this._streetAddress = config.streetAddress;
    this._telephoneNumbers = config.telephoneNumbers;
    this._uidNumber = config.uidNumber;
    this._userclass = config.userclass;
    this._userpassword = config.userpassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_disabled - computed: false, optional: true, required: false
  private _accountDisabled?: boolean | cdktf.IResolvable; 
  public get accountDisabled() {
    return this.getBooleanAttribute('account_disabled');
  }
  public set accountDisabled(value: boolean | cdktf.IResolvable) {
    this._accountDisabled = value;
  }
  public resetAccountDisabled() {
    this._accountDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountDisabledInput() {
    return this._accountDisabled;
  }

  // car_license - computed: false, optional: true, required: false
  private _carLicense?: string[]; 
  public get carLicense() {
    return this.getListAttribute('car_license');
  }
  public set carLicense(value: string[]) {
    this._carLicense = value;
  }
  public resetCarLicense() {
    this._carLicense = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carLicenseInput() {
    return this._carLicense;
  }

  // city - computed: false, optional: true, required: false
  private _city?: string; 
  public get city() {
    return this.getStringAttribute('city');
  }
  public set city(value: string) {
    this._city = value;
  }
  public resetCity() {
    this._city = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cityInput() {
    return this._city;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email_address - computed: false, optional: true, required: false
  private _emailAddress?: string[]; 
  public get emailAddress() {
    return this.getListAttribute('email_address');
  }
  public set emailAddress(value: string[]) {
    this._emailAddress = value;
  }
  public resetEmailAddress() {
    this._emailAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressInput() {
    return this._emailAddress;
  }

  // employee_number - computed: false, optional: true, required: false
  private _employeeNumber?: string; 
  public get employeeNumber() {
    return this.getStringAttribute('employee_number');
  }
  public set employeeNumber(value: string) {
    this._employeeNumber = value;
  }
  public resetEmployeeNumber() {
    this._employeeNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeNumberInput() {
    return this._employeeNumber;
  }

  // employee_type - computed: false, optional: true, required: false
  private _employeeType?: string; 
  public get employeeType() {
    return this.getStringAttribute('employee_type');
  }
  public set employeeType(value: string) {
    this._employeeType = value;
  }
  public resetEmployeeType() {
    this._employeeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get employeeTypeInput() {
    return this._employeeType;
  }

  // first_name - computed: false, optional: false, required: true
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName?: string; 
  public get fullName() {
    return this.getStringAttribute('full_name');
  }
  public set fullName(value: string) {
    this._fullName = value;
  }
  public resetFullName() {
    this._fullName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName;
  }

  // gecos - computed: false, optional: true, required: false
  private _gecos?: string; 
  public get gecos() {
    return this.getStringAttribute('gecos');
  }
  public set gecos(value: string) {
    this._gecos = value;
  }
  public resetGecos() {
    this._gecos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gecosInput() {
    return this._gecos;
  }

  // gid_number - computed: false, optional: true, required: false
  private _gidNumber?: number; 
  public get gidNumber() {
    return this.getNumberAttribute('gid_number');
  }
  public set gidNumber(value: number) {
    this._gidNumber = value;
  }
  public resetGidNumber() {
    this._gidNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidNumberInput() {
    return this._gidNumber;
  }

  // home_directory - computed: false, optional: true, required: false
  private _homeDirectory?: string; 
  public get homeDirectory() {
    return this.getStringAttribute('home_directory');
  }
  public set homeDirectory(value: string) {
    this._homeDirectory = value;
  }
  public resetHomeDirectory() {
    this._homeDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get homeDirectoryInput() {
    return this._homeDirectory;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // initials - computed: false, optional: true, required: false
  private _initials?: string; 
  public get initials() {
    return this.getStringAttribute('initials');
  }
  public set initials(value: string) {
    this._initials = value;
  }
  public resetInitials() {
    this._initials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialsInput() {
    return this._initials;
  }

  // job_title - computed: false, optional: true, required: false
  private _jobTitle?: string; 
  public get jobTitle() {
    return this.getStringAttribute('job_title');
  }
  public set jobTitle(value: string) {
    this._jobTitle = value;
  }
  public resetJobTitle() {
    this._jobTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTitleInput() {
    return this._jobTitle;
  }

  // krb_password_expiration - computed: false, optional: true, required: false
  private _krbPasswordExpiration?: string; 
  public get krbPasswordExpiration() {
    return this.getStringAttribute('krb_password_expiration');
  }
  public set krbPasswordExpiration(value: string) {
    this._krbPasswordExpiration = value;
  }
  public resetKrbPasswordExpiration() {
    this._krbPasswordExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPasswordExpirationInput() {
    return this._krbPasswordExpiration;
  }

  // krb_principal_expiration - computed: false, optional: true, required: false
  private _krbPrincipalExpiration?: string; 
  public get krbPrincipalExpiration() {
    return this.getStringAttribute('krb_principal_expiration');
  }
  public set krbPrincipalExpiration(value: string) {
    this._krbPrincipalExpiration = value;
  }
  public resetKrbPrincipalExpiration() {
    this._krbPrincipalExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPrincipalExpirationInput() {
    return this._krbPrincipalExpiration;
  }

  // krb_principal_name - computed: false, optional: true, required: false
  private _krbPrincipalName?: string[]; 
  public get krbPrincipalName() {
    return this.getListAttribute('krb_principal_name');
  }
  public set krbPrincipalName(value: string[]) {
    this._krbPrincipalName = value;
  }
  public resetKrbPrincipalName() {
    this._krbPrincipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPrincipalNameInput() {
    return this._krbPrincipalName;
  }

  // last_name - computed: false, optional: false, required: true
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // login_shell - computed: false, optional: true, required: false
  private _loginShell?: string; 
  public get loginShell() {
    return this.getStringAttribute('login_shell');
  }
  public set loginShell(value: string) {
    this._loginShell = value;
  }
  public resetLoginShell() {
    this._loginShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginShellInput() {
    return this._loginShell;
  }

  // manager - computed: false, optional: true, required: false
  private _manager?: string; 
  public get manager() {
    return this.getStringAttribute('manager');
  }
  public set manager(value: string) {
    this._manager = value;
  }
  public resetManager() {
    this._manager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager;
  }

  // mobile_numbers - computed: false, optional: true, required: false
  private _mobileNumbers?: string[]; 
  public get mobileNumbers() {
    return this.getListAttribute('mobile_numbers');
  }
  public set mobileNumbers(value: string[]) {
    this._mobileNumbers = value;
  }
  public resetMobileNumbers() {
    this._mobileNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobileNumbersInput() {
    return this._mobileNumbers;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // organisation_unit - computed: false, optional: true, required: false
  private _organisationUnit?: string; 
  public get organisationUnit() {
    return this.getStringAttribute('organisation_unit');
  }
  public set organisationUnit(value: string) {
    this._organisationUnit = value;
  }
  public resetOrganisationUnit() {
    this._organisationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organisationUnitInput() {
    return this._organisationUnit;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // preferred_language - computed: false, optional: true, required: false
  private _preferredLanguage?: string; 
  public get preferredLanguage() {
    return this.getStringAttribute('preferred_language');
  }
  public set preferredLanguage(value: string) {
    this._preferredLanguage = value;
  }
  public resetPreferredLanguage() {
    this._preferredLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguageInput() {
    return this._preferredLanguage;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // random_password - computed: false, optional: true, required: false
  private _randomPassword?: boolean | cdktf.IResolvable; 
  public get randomPassword() {
    return this.getBooleanAttribute('random_password');
  }
  public set randomPassword(value: boolean | cdktf.IResolvable) {
    this._randomPassword = value;
  }
  public resetRandomPassword() {
    this._randomPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomPasswordInput() {
    return this._randomPassword;
  }

  // ssh_public_key - computed: false, optional: true, required: false
  private _sshPublicKey?: string[]; 
  public get sshPublicKey() {
    return this.getListAttribute('ssh_public_key');
  }
  public set sshPublicKey(value: string[]) {
    this._sshPublicKey = value;
  }
  public resetSshPublicKey() {
    this._sshPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPublicKeyInput() {
    return this._sshPublicKey;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }

  // telephone_numbers - computed: false, optional: true, required: false
  private _telephoneNumbers?: string[]; 
  public get telephoneNumbers() {
    return this.getListAttribute('telephone_numbers');
  }
  public set telephoneNumbers(value: string[]) {
    this._telephoneNumbers = value;
  }
  public resetTelephoneNumbers() {
    this._telephoneNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telephoneNumbersInput() {
    return this._telephoneNumbers;
  }

  // uid_number - computed: false, optional: true, required: false
  private _uidNumber?: number; 
  public get uidNumber() {
    return this.getNumberAttribute('uid_number');
  }
  public set uidNumber(value: number) {
    this._uidNumber = value;
  }
  public resetUidNumber() {
    this._uidNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidNumberInput() {
    return this._uidNumber;
  }

  // userclass - computed: false, optional: true, required: false
  private _userclass?: string[]; 
  public get userclass() {
    return this.getListAttribute('userclass');
  }
  public set userclass(value: string[]) {
    this._userclass = value;
  }
  public resetUserclass() {
    this._userclass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userclassInput() {
    return this._userclass;
  }

  // userpassword - computed: false, optional: true, required: false
  private _userpassword?: string; 
  public get userpassword() {
    return this.getStringAttribute('userpassword');
  }
  public set userpassword(value: string) {
    this._userpassword = value;
  }
  public resetUserpassword() {
    this._userpassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userpasswordInput() {
    return this._userpassword;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_disabled: cdktf.booleanToTerraform(this._accountDisabled),
      car_license: cdktf.listMapper(cdktf.stringToTerraform, false)(this._carLicense),
      city: cdktf.stringToTerraform(this._city),
      display_name: cdktf.stringToTerraform(this._displayName),
      email_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailAddress),
      employee_number: cdktf.stringToTerraform(this._employeeNumber),
      employee_type: cdktf.stringToTerraform(this._employeeType),
      first_name: cdktf.stringToTerraform(this._firstName),
      full_name: cdktf.stringToTerraform(this._fullName),
      gecos: cdktf.stringToTerraform(this._gecos),
      gid_number: cdktf.numberToTerraform(this._gidNumber),
      home_directory: cdktf.stringToTerraform(this._homeDirectory),
      id: cdktf.stringToTerraform(this._id),
      initials: cdktf.stringToTerraform(this._initials),
      job_title: cdktf.stringToTerraform(this._jobTitle),
      krb_password_expiration: cdktf.stringToTerraform(this._krbPasswordExpiration),
      krb_principal_expiration: cdktf.stringToTerraform(this._krbPrincipalExpiration),
      krb_principal_name: cdktf.listMapper(cdktf.stringToTerraform, false)(this._krbPrincipalName),
      last_name: cdktf.stringToTerraform(this._lastName),
      login_shell: cdktf.stringToTerraform(this._loginShell),
      manager: cdktf.stringToTerraform(this._manager),
      mobile_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mobileNumbers),
      name: cdktf.stringToTerraform(this._name),
      organisation_unit: cdktf.stringToTerraform(this._organisationUnit),
      postal_code: cdktf.stringToTerraform(this._postalCode),
      preferred_language: cdktf.stringToTerraform(this._preferredLanguage),
      province: cdktf.stringToTerraform(this._province),
      random_password: cdktf.booleanToTerraform(this._randomPassword),
      ssh_public_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sshPublicKey),
      street_address: cdktf.stringToTerraform(this._streetAddress),
      telephone_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._telephoneNumbers),
      uid_number: cdktf.numberToTerraform(this._uidNumber),
      userclass: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userclass),
      userpassword: cdktf.stringToTerraform(this._userpassword),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_disabled: {
        value: cdktf.booleanToHclTerraform(this._accountDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      car_license: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._carLicense),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      city: {
        value: cdktf.stringToHclTerraform(this._city),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      employee_number: {
        value: cdktf.stringToHclTerraform(this._employeeNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      employee_type: {
        value: cdktf.stringToHclTerraform(this._employeeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_name: {
        value: cdktf.stringToHclTerraform(this._fullName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gecos: {
        value: cdktf.stringToHclTerraform(this._gecos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gid_number: {
        value: cdktf.numberToHclTerraform(this._gidNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      home_directory: {
        value: cdktf.stringToHclTerraform(this._homeDirectory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initials: {
        value: cdktf.stringToHclTerraform(this._initials),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_title: {
        value: cdktf.stringToHclTerraform(this._jobTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      krb_password_expiration: {
        value: cdktf.stringToHclTerraform(this._krbPasswordExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      krb_principal_expiration: {
        value: cdktf.stringToHclTerraform(this._krbPrincipalExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      krb_principal_name: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._krbPrincipalName),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_shell: {
        value: cdktf.stringToHclTerraform(this._loginShell),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager: {
        value: cdktf.stringToHclTerraform(this._manager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mobile_numbers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mobileNumbers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organisation_unit: {
        value: cdktf.stringToHclTerraform(this._organisationUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      postal_code: {
        value: cdktf.stringToHclTerraform(this._postalCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_language: {
        value: cdktf.stringToHclTerraform(this._preferredLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      province: {
        value: cdktf.stringToHclTerraform(this._province),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      random_password: {
        value: cdktf.booleanToHclTerraform(this._randomPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssh_public_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sshPublicKey),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      street_address: {
        value: cdktf.stringToHclTerraform(this._streetAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      telephone_numbers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._telephoneNumbers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      uid_number: {
        value: cdktf.numberToHclTerraform(this._uidNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      userclass: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userclass),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      userpassword: {
        value: cdktf.stringToHclTerraform(this._userpassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
