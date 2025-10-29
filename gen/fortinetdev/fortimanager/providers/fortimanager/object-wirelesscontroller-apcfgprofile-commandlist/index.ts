// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectWirelesscontrollerApcfgprofileCommandlistConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist#adom ObjectWirelesscontrollerApcfgprofileCommandlist#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist#apcfg_profile ObjectWirelesscontrollerApcfgprofileCommandlist#apcfg_profile}
  */
  readonly apcfgProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist#fosid ObjectWirelesscontrollerApcfgprofileCommandlist#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist#id ObjectWirelesscontrollerApcfgprofileCommandlist#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist#name ObjectWirelesscontrollerApcfgprofileCommandlist#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist#passwd_value ObjectWirelesscontrollerApcfgprofileCommandlist#passwd_value}
  */
  readonly passwdValue?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist#scopetype ObjectWirelesscontrollerApcfgprofileCommandlist#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist#type ObjectWirelesscontrollerApcfgprofileCommandlist#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist#value ObjectWirelesscontrollerApcfgprofileCommandlist#value}
  */
  readonly value?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist fortimanager_object_wirelesscontroller_apcfgprofile_commandlist}
*/
export class ObjectWirelesscontrollerApcfgprofileCommandlist extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_wirelesscontroller_apcfgprofile_commandlist";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectWirelesscontrollerApcfgprofileCommandlist resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectWirelesscontrollerApcfgprofileCommandlist to import
  * @param importFromId The id of the existing ObjectWirelesscontrollerApcfgprofileCommandlist that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectWirelesscontrollerApcfgprofileCommandlist to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_wirelesscontroller_apcfgprofile_commandlist", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_wirelesscontroller_apcfgprofile_commandlist fortimanager_object_wirelesscontroller_apcfgprofile_commandlist} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectWirelesscontrollerApcfgprofileCommandlistConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectWirelesscontrollerApcfgprofileCommandlistConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_wirelesscontroller_apcfgprofile_commandlist',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._apcfgProfile = config.apcfgProfile;
    this._fosid = config.fosid;
    this._id = config.id;
    this._name = config.name;
    this._passwdValue = config.passwdValue;
    this._scopetype = config.scopetype;
    this._type = config.type;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // apcfg_profile - computed: false, optional: false, required: true
  private _apcfgProfile?: string; 
  public get apcfgProfile() {
    return this.getStringAttribute('apcfg_profile');
  }
  public set apcfgProfile(value: string) {
    this._apcfgProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apcfgProfileInput() {
    return this._apcfgProfile;
  }

  // fosid - computed: false, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // name - computed: false, optional: true, required: false
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

  // passwd_value - computed: true, optional: true, required: false
  private _passwdValue?: string[]; 
  public get passwdValue() {
    return cdktf.Fn.tolist(this.getListAttribute('passwd_value'));
  }
  public set passwdValue(value: string[]) {
    this._passwdValue = value;
  }
  public resetPasswdValue() {
    this._passwdValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwdValueInput() {
    return this._passwdValue;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      apcfg_profile: cdktf.stringToTerraform(this._apcfgProfile),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      passwd_value: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passwdValue),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      type: cdktf.stringToTerraform(this._type),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apcfg_profile: {
        value: cdktf.stringToHclTerraform(this._apcfgProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwd_value: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passwdValue),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
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
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
