// https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciCloudEndpointSelectorforExternalEpgsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs#annotation DataAciCloudEndpointSelectorforExternalEpgs#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs#cloud_external_epg_dn DataAciCloudEndpointSelectorforExternalEpgs#cloud_external_epg_dn}
  */
  readonly cloudExternalEpgDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs#description DataAciCloudEndpointSelectorforExternalEpgs#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs#id DataAciCloudEndpointSelectorforExternalEpgs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs#is_shared DataAciCloudEndpointSelectorforExternalEpgs#is_shared}
  */
  readonly isShared?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs#match_expression DataAciCloudEndpointSelectorforExternalEpgs#match_expression}
  */
  readonly matchExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs#name DataAciCloudEndpointSelectorforExternalEpgs#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs#name_alias DataAciCloudEndpointSelectorforExternalEpgs#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs#subnet DataAciCloudEndpointSelectorforExternalEpgs#subnet}
  */
  readonly subnet?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs aci_cloud_endpoint_selectorfor_external_epgs}
*/
export class DataAciCloudEndpointSelectorforExternalEpgs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_endpoint_selectorfor_external_epgs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciCloudEndpointSelectorforExternalEpgs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciCloudEndpointSelectorforExternalEpgs to import
  * @param importFromId The id of the existing DataAciCloudEndpointSelectorforExternalEpgs that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciCloudEndpointSelectorforExternalEpgs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_endpoint_selectorfor_external_epgs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/data-sources/cloud_endpoint_selectorfor_external_epgs aci_cloud_endpoint_selectorfor_external_epgs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciCloudEndpointSelectorforExternalEpgsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciCloudEndpointSelectorforExternalEpgsConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_endpoint_selectorfor_external_epgs',
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
    this._cloudExternalEpgDn = config.cloudExternalEpgDn;
    this._description = config.description;
    this._id = config.id;
    this._isShared = config.isShared;
    this._matchExpression = config.matchExpression;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._subnet = config.subnet;
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

  // cloud_external_epg_dn - computed: false, optional: false, required: true
  private _cloudExternalEpgDn?: string; 
  public get cloudExternalEpgDn() {
    return this.getStringAttribute('cloud_external_epg_dn');
  }
  public set cloudExternalEpgDn(value: string) {
    this._cloudExternalEpgDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudExternalEpgDnInput() {
    return this._cloudExternalEpgDn;
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

  // is_shared - computed: true, optional: true, required: false
  private _isShared?: string; 
  public get isShared() {
    return this.getStringAttribute('is_shared');
  }
  public set isShared(value: string) {
    this._isShared = value;
  }
  public resetIsShared() {
    this._isShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSharedInput() {
    return this._isShared;
  }

  // match_expression - computed: true, optional: true, required: false
  private _matchExpression?: string; 
  public get matchExpression() {
    return this.getStringAttribute('match_expression');
  }
  public set matchExpression(value: string) {
    this._matchExpression = value;
  }
  public resetMatchExpression() {
    this._matchExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionInput() {
    return this._matchExpression;
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

  // subnet - computed: true, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      cloud_external_epg_dn: cdktf.stringToTerraform(this._cloudExternalEpgDn),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      is_shared: cdktf.stringToTerraform(this._isShared),
      match_expression: cdktf.stringToTerraform(this._matchExpression),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      subnet: cdktf.stringToTerraform(this._subnet),
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
      cloud_external_epg_dn: {
        value: cdktf.stringToHclTerraform(this._cloudExternalEpgDn),
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
      is_shared: {
        value: cdktf.stringToHclTerraform(this._isShared),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_expression: {
        value: cdktf.stringToHclTerraform(this._matchExpression),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
