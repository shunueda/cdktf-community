// https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/endpoint_security_group_epg_selector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciEndpointSecurityGroupEpgSelectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/endpoint_security_group_epg_selector#annotation DataAciEndpointSecurityGroupEpgSelector#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/endpoint_security_group_epg_selector#description DataAciEndpointSecurityGroupEpgSelector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/endpoint_security_group_epg_selector#endpoint_security_group_dn DataAciEndpointSecurityGroupEpgSelector#endpoint_security_group_dn}
  */
  readonly endpointSecurityGroupDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/endpoint_security_group_epg_selector#id DataAciEndpointSecurityGroupEpgSelector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/endpoint_security_group_epg_selector#match_epg_dn DataAciEndpointSecurityGroupEpgSelector#match_epg_dn}
  */
  readonly matchEpgDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/endpoint_security_group_epg_selector#name_alias DataAciEndpointSecurityGroupEpgSelector#name_alias}
  */
  readonly nameAlias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/endpoint_security_group_epg_selector aci_endpoint_security_group_epg_selector}
*/
export class DataAciEndpointSecurityGroupEpgSelector extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_endpoint_security_group_epg_selector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciEndpointSecurityGroupEpgSelector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciEndpointSecurityGroupEpgSelector to import
  * @param importFromId The id of the existing DataAciEndpointSecurityGroupEpgSelector that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/endpoint_security_group_epg_selector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciEndpointSecurityGroupEpgSelector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_endpoint_security_group_epg_selector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/endpoint_security_group_epg_selector aci_endpoint_security_group_epg_selector} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciEndpointSecurityGroupEpgSelectorConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciEndpointSecurityGroupEpgSelectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_endpoint_security_group_epg_selector',
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
    this._description = config.description;
    this._endpointSecurityGroupDn = config.endpointSecurityGroupDn;
    this._id = config.id;
    this._matchEpgDn = config.matchEpgDn;
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

  // endpoint_security_group_dn - computed: false, optional: false, required: true
  private _endpointSecurityGroupDn?: string; 
  public get endpointSecurityGroupDn() {
    return this.getStringAttribute('endpoint_security_group_dn');
  }
  public set endpointSecurityGroupDn(value: string) {
    this._endpointSecurityGroupDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointSecurityGroupDnInput() {
    return this._endpointSecurityGroupDn;
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

  // match_epg_dn - computed: false, optional: false, required: true
  private _matchEpgDn?: string; 
  public get matchEpgDn() {
    return this.getStringAttribute('match_epg_dn');
  }
  public set matchEpgDn(value: string) {
    this._matchEpgDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchEpgDnInput() {
    return this._matchEpgDn;
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
      description: cdktf.stringToTerraform(this._description),
      endpoint_security_group_dn: cdktf.stringToTerraform(this._endpointSecurityGroupDn),
      id: cdktf.stringToTerraform(this._id),
      match_epg_dn: cdktf.stringToTerraform(this._matchEpgDn),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_security_group_dn: {
        value: cdktf.stringToHclTerraform(this._endpointSecurityGroupDn),
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
      match_epg_dn: {
        value: cdktf.stringToHclTerraform(this._matchEpgDn),
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
