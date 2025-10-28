// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExtendercontrollerDataplanConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#apn ExtendercontrollerDataplan#apn}
  */
  readonly apn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#auth_type ExtendercontrollerDataplan#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#billing_date ExtendercontrollerDataplan#billing_date}
  */
  readonly billingDate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#capacity ExtendercontrollerDataplan#capacity}
  */
  readonly capacity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#carrier ExtendercontrollerDataplan#carrier}
  */
  readonly carrier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#iccid ExtendercontrollerDataplan#iccid}
  */
  readonly iccid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#id ExtendercontrollerDataplan#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#modem_id ExtendercontrollerDataplan#modem_id}
  */
  readonly modemId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#monthly_fee ExtendercontrollerDataplan#monthly_fee}
  */
  readonly monthlyFee?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#name ExtendercontrollerDataplan#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#overage ExtendercontrollerDataplan#overage}
  */
  readonly overage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#password ExtendercontrollerDataplan#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#pdn ExtendercontrollerDataplan#pdn}
  */
  readonly pdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#preferred_subnet ExtendercontrollerDataplan#preferred_subnet}
  */
  readonly preferredSubnet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#private_network ExtendercontrollerDataplan#private_network}
  */
  readonly privateNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#signal_period ExtendercontrollerDataplan#signal_period}
  */
  readonly signalPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#signal_threshold ExtendercontrollerDataplan#signal_threshold}
  */
  readonly signalThreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#slot ExtendercontrollerDataplan#slot}
  */
  readonly slot?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#type ExtendercontrollerDataplan#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#username ExtendercontrollerDataplan#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#vdomparam ExtendercontrollerDataplan#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan fortios_extendercontroller_dataplan}
*/
export class ExtendercontrollerDataplan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_extendercontroller_dataplan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ExtendercontrollerDataplan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ExtendercontrollerDataplan to import
  * @param importFromId The id of the existing ExtendercontrollerDataplan that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ExtendercontrollerDataplan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_extendercontroller_dataplan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/extendercontroller_dataplan fortios_extendercontroller_dataplan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExtendercontrollerDataplanConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ExtendercontrollerDataplanConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortios_extendercontroller_dataplan',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apn = config.apn;
    this._authType = config.authType;
    this._billingDate = config.billingDate;
    this._capacity = config.capacity;
    this._carrier = config.carrier;
    this._iccid = config.iccid;
    this._id = config.id;
    this._modemId = config.modemId;
    this._monthlyFee = config.monthlyFee;
    this._name = config.name;
    this._overage = config.overage;
    this._password = config.password;
    this._pdn = config.pdn;
    this._preferredSubnet = config.preferredSubnet;
    this._privateNetwork = config.privateNetwork;
    this._signalPeriod = config.signalPeriod;
    this._signalThreshold = config.signalThreshold;
    this._slot = config.slot;
    this._type = config.type;
    this._username = config.username;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apn - computed: false, optional: true, required: false
  private _apn?: string; 
  public get apn() {
    return this.getStringAttribute('apn');
  }
  public set apn(value: string) {
    this._apn = value;
  }
  public resetApn() {
    this._apn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apnInput() {
    return this._apn;
  }

  // auth_type - computed: true, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // billing_date - computed: true, optional: true, required: false
  private _billingDate?: number; 
  public get billingDate() {
    return this.getNumberAttribute('billing_date');
  }
  public set billingDate(value: number) {
    this._billingDate = value;
  }
  public resetBillingDate() {
    this._billingDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingDateInput() {
    return this._billingDate;
  }

  // capacity - computed: false, optional: true, required: false
  private _capacity?: number; 
  public get capacity() {
    return this.getNumberAttribute('capacity');
  }
  public set capacity(value: number) {
    this._capacity = value;
  }
  public resetCapacity() {
    this._capacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // carrier - computed: false, optional: true, required: false
  private _carrier?: string; 
  public get carrier() {
    return this.getStringAttribute('carrier');
  }
  public set carrier(value: string) {
    this._carrier = value;
  }
  public resetCarrier() {
    this._carrier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get carrierInput() {
    return this._carrier;
  }

  // iccid - computed: false, optional: true, required: false
  private _iccid?: string; 
  public get iccid() {
    return this.getStringAttribute('iccid');
  }
  public set iccid(value: string) {
    this._iccid = value;
  }
  public resetIccid() {
    this._iccid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iccidInput() {
    return this._iccid;
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

  // modem_id - computed: true, optional: true, required: false
  private _modemId?: string; 
  public get modemId() {
    return this.getStringAttribute('modem_id');
  }
  public set modemId(value: string) {
    this._modemId = value;
  }
  public resetModemId() {
    this._modemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modemIdInput() {
    return this._modemId;
  }

  // monthly_fee - computed: false, optional: true, required: false
  private _monthlyFee?: number; 
  public get monthlyFee() {
    return this.getNumberAttribute('monthly_fee');
  }
  public set monthlyFee(value: number) {
    this._monthlyFee = value;
  }
  public resetMonthlyFee() {
    this._monthlyFee = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monthlyFeeInput() {
    return this._monthlyFee;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // overage - computed: true, optional: true, required: false
  private _overage?: string; 
  public get overage() {
    return this.getStringAttribute('overage');
  }
  public set overage(value: string) {
    this._overage = value;
  }
  public resetOverage() {
    this._overage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overageInput() {
    return this._overage;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pdn - computed: true, optional: true, required: false
  private _pdn?: string; 
  public get pdn() {
    return this.getStringAttribute('pdn');
  }
  public set pdn(value: string) {
    this._pdn = value;
  }
  public resetPdn() {
    this._pdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pdnInput() {
    return this._pdn;
  }

  // preferred_subnet - computed: true, optional: true, required: false
  private _preferredSubnet?: number; 
  public get preferredSubnet() {
    return this.getNumberAttribute('preferred_subnet');
  }
  public set preferredSubnet(value: number) {
    this._preferredSubnet = value;
  }
  public resetPreferredSubnet() {
    this._preferredSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredSubnetInput() {
    return this._preferredSubnet;
  }

  // private_network - computed: true, optional: true, required: false
  private _privateNetwork?: string; 
  public get privateNetwork() {
    return this.getStringAttribute('private_network');
  }
  public set privateNetwork(value: string) {
    this._privateNetwork = value;
  }
  public resetPrivateNetwork() {
    this._privateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkInput() {
    return this._privateNetwork;
  }

  // signal_period - computed: true, optional: true, required: false
  private _signalPeriod?: number; 
  public get signalPeriod() {
    return this.getNumberAttribute('signal_period');
  }
  public set signalPeriod(value: number) {
    this._signalPeriod = value;
  }
  public resetSignalPeriod() {
    this._signalPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalPeriodInput() {
    return this._signalPeriod;
  }

  // signal_threshold - computed: true, optional: true, required: false
  private _signalThreshold?: number; 
  public get signalThreshold() {
    return this.getNumberAttribute('signal_threshold');
  }
  public set signalThreshold(value: number) {
    this._signalThreshold = value;
  }
  public resetSignalThreshold() {
    this._signalThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signalThresholdInput() {
    return this._signalThreshold;
  }

  // slot - computed: false, optional: true, required: false
  private _slot?: string; 
  public get slot() {
    return this.getStringAttribute('slot');
  }
  public set slot(value: string) {
    this._slot = value;
  }
  public resetSlot() {
    this._slot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      apn: cdktf.stringToTerraform(this._apn),
      auth_type: cdktf.stringToTerraform(this._authType),
      billing_date: cdktf.numberToTerraform(this._billingDate),
      capacity: cdktf.numberToTerraform(this._capacity),
      carrier: cdktf.stringToTerraform(this._carrier),
      iccid: cdktf.stringToTerraform(this._iccid),
      id: cdktf.stringToTerraform(this._id),
      modem_id: cdktf.stringToTerraform(this._modemId),
      monthly_fee: cdktf.numberToTerraform(this._monthlyFee),
      name: cdktf.stringToTerraform(this._name),
      overage: cdktf.stringToTerraform(this._overage),
      password: cdktf.stringToTerraform(this._password),
      pdn: cdktf.stringToTerraform(this._pdn),
      preferred_subnet: cdktf.numberToTerraform(this._preferredSubnet),
      private_network: cdktf.stringToTerraform(this._privateNetwork),
      signal_period: cdktf.numberToTerraform(this._signalPeriod),
      signal_threshold: cdktf.numberToTerraform(this._signalThreshold),
      slot: cdktf.stringToTerraform(this._slot),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apn: {
        value: cdktf.stringToHclTerraform(this._apn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      billing_date: {
        value: cdktf.numberToHclTerraform(this._billingDate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      capacity: {
        value: cdktf.numberToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      carrier: {
        value: cdktf.stringToHclTerraform(this._carrier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      iccid: {
        value: cdktf.stringToHclTerraform(this._iccid),
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
      modem_id: {
        value: cdktf.stringToHclTerraform(this._modemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monthly_fee: {
        value: cdktf.numberToHclTerraform(this._monthlyFee),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overage: {
        value: cdktf.stringToHclTerraform(this._overage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pdn: {
        value: cdktf.stringToHclTerraform(this._pdn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_subnet: {
        value: cdktf.numberToHclTerraform(this._preferredSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_network: {
        value: cdktf.stringToHclTerraform(this._privateNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signal_period: {
        value: cdktf.numberToHclTerraform(this._signalPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      signal_threshold: {
        value: cdktf.numberToHclTerraform(this._signalThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slot: {
        value: cdktf.stringToHclTerraform(this._slot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
