// https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciL3OutOspfInterfaceProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile#annotation DataAciL3OutOspfInterfaceProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile#auth_key DataAciL3OutOspfInterfaceProfile#auth_key}
  */
  readonly authKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile#auth_key_id DataAciL3OutOspfInterfaceProfile#auth_key_id}
  */
  readonly authKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile#auth_type DataAciL3OutOspfInterfaceProfile#auth_type}
  */
  readonly authType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile#description DataAciL3OutOspfInterfaceProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile#id DataAciL3OutOspfInterfaceProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile#logical_interface_profile_dn DataAciL3OutOspfInterfaceProfile#logical_interface_profile_dn}
  */
  readonly logicalInterfaceProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile#name_alias DataAciL3OutOspfInterfaceProfile#name_alias}
  */
  readonly nameAlias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile aci_l3out_ospf_interface_profile}
*/
export class DataAciL3OutOspfInterfaceProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_l3out_ospf_interface_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciL3OutOspfInterfaceProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciL3OutOspfInterfaceProfile to import
  * @param importFromId The id of the existing DataAciL3OutOspfInterfaceProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciL3OutOspfInterfaceProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_l3out_ospf_interface_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/l3out_ospf_interface_profile aci_l3out_ospf_interface_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciL3OutOspfInterfaceProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciL3OutOspfInterfaceProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_l3out_ospf_interface_profile',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._authKey = config.authKey;
    this._authKeyId = config.authKeyId;
    this._authType = config.authType;
    this._description = config.description;
    this._id = config.id;
    this._logicalInterfaceProfileDn = config.logicalInterfaceProfileDn;
    this._nameAlias = config.nameAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // auth_key - computed: true, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // auth_key_id - computed: true, optional: true, required: false
  private _authKeyId?: string; 
  public get authKeyId() {
    return this.getStringAttribute('auth_key_id');
  }
  public set authKeyId(value: string) {
    this._authKeyId = value;
  }
  public resetAuthKeyId() {
    this._authKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyIdInput() {
    return this._authKeyId;
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // logical_interface_profile_dn - computed: false, optional: false, required: true
  private _logicalInterfaceProfileDn?: string; 
  public get logicalInterfaceProfileDn() {
    return this.getStringAttribute('logical_interface_profile_dn');
  }
  public set logicalInterfaceProfileDn(value: string) {
    this._logicalInterfaceProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalInterfaceProfileDnInput() {
    return this._logicalInterfaceProfileDn;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      auth_key: cdktf.stringToTerraform(this._authKey),
      auth_key_id: cdktf.stringToTerraform(this._authKeyId),
      auth_type: cdktf.stringToTerraform(this._authType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      logical_interface_profile_dn: cdktf.stringToTerraform(this._logicalInterfaceProfileDn),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_key_id: {
        value: cdktf.stringToHclTerraform(this._authKeyId),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      logical_interface_profile_dn: {
        value: cdktf.stringToHclTerraform(this._logicalInterfaceProfileDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
