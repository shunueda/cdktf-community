// https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LeafSelectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector#annotation LeafSelector#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector#description LeafSelector#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector#id LeafSelector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector#leaf_profile_dn LeafSelector#leaf_profile_dn}
  */
  readonly leafProfileDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector#name LeafSelector#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector#name_alias LeafSelector#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector#relation_infra_rs_acc_node_p_grp LeafSelector#relation_infra_rs_acc_node_p_grp}
  */
  readonly relationInfraRsAccNodePGrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector#switch_association_type LeafSelector#switch_association_type}
  */
  readonly switchAssociationType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector aci_leaf_selector}
*/
export class LeafSelector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_leaf_selector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LeafSelector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LeafSelector to import
  * @param importFromId The id of the existing LeafSelector that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LeafSelector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_leaf_selector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.17.0/docs/resources/leaf_selector aci_leaf_selector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LeafSelectorConfig
  */
  public constructor(scope: Construct, id: string, config: LeafSelectorConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_leaf_selector',
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
    this._id = config.id;
    this._leafProfileDn = config.leafProfileDn;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationInfraRsAccNodePGrp = config.relationInfraRsAccNodePGrp;
    this._switchAssociationType = config.switchAssociationType;
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

  // leaf_profile_dn - computed: false, optional: false, required: true
  private _leafProfileDn?: string; 
  public get leafProfileDn() {
    return this.getStringAttribute('leaf_profile_dn');
  }
  public set leafProfileDn(value: string) {
    this._leafProfileDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get leafProfileDnInput() {
    return this._leafProfileDn;
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

  // relation_infra_rs_acc_node_p_grp - computed: false, optional: true, required: false
  private _relationInfraRsAccNodePGrp?: string; 
  public get relationInfraRsAccNodePGrp() {
    return this.getStringAttribute('relation_infra_rs_acc_node_p_grp');
  }
  public set relationInfraRsAccNodePGrp(value: string) {
    this._relationInfraRsAccNodePGrp = value;
  }
  public resetRelationInfraRsAccNodePGrp() {
    this._relationInfraRsAccNodePGrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationInfraRsAccNodePGrpInput() {
    return this._relationInfraRsAccNodePGrp;
  }

  // switch_association_type - computed: false, optional: false, required: true
  private _switchAssociationType?: string; 
  public get switchAssociationType() {
    return this.getStringAttribute('switch_association_type');
  }
  public set switchAssociationType(value: string) {
    this._switchAssociationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get switchAssociationTypeInput() {
    return this._switchAssociationType;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      leaf_profile_dn: cdktf.stringToTerraform(this._leafProfileDn),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_infra_rs_acc_node_p_grp: cdktf.stringToTerraform(this._relationInfraRsAccNodePGrp),
      switch_association_type: cdktf.stringToTerraform(this._switchAssociationType),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      leaf_profile_dn: {
        value: cdktf.stringToHclTerraform(this._leafProfileDn),
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
      relation_infra_rs_acc_node_p_grp: {
        value: cdktf.stringToHclTerraform(this._relationInfraRsAccNodePGrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_association_type: {
        value: cdktf.stringToHclTerraform(this._switchAssociationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
