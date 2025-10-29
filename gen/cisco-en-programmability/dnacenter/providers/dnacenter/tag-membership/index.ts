// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/tag_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TagMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/tag_membership#id TagMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/tag_membership#parameters TagMembership#parameters}
  */
  readonly parameters: TagMembershipParameters;
}
export interface TagMembershipItem {
}

export function tagMembershipItemToTerraform(struct?: TagMembershipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function tagMembershipItemToHclTerraform(struct?: TagMembershipItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TagMembershipItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TagMembershipItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagMembershipItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // instance_uuid - computed: true, optional: false, required: false
  public get instanceUuid() {
    return this.getStringAttribute('instance_uuid');
  }
}

export class TagMembershipItemList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TagMembershipItemOutputReference {
    return new TagMembershipItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TagMembershipParameters {
  /**
  * memberId path parameter. TagMember id to be removed from tag
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/tag_membership#member_id TagMembership#member_id}
  */
  readonly memberId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/tag_membership#member_type TagMembership#member_type}
  */
  readonly memberType: string;
  /**
  * id path parameter. Tag ID
  * 			
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/tag_membership#tag_id TagMembership#tag_id}
  */
  readonly tagId: string;
}

export function tagMembershipParametersToTerraform(struct?: TagMembershipParametersOutputReference | TagMembershipParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    member_id: cdktf.stringToTerraform(struct!.memberId),
    member_type: cdktf.stringToTerraform(struct!.memberType),
    tag_id: cdktf.stringToTerraform(struct!.tagId),
  }
}


export function tagMembershipParametersToHclTerraform(struct?: TagMembershipParametersOutputReference | TagMembershipParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    member_id: {
      value: cdktf.stringToHclTerraform(struct!.memberId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    member_type: {
      value: cdktf.stringToHclTerraform(struct!.memberType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_id: {
      value: cdktf.stringToHclTerraform(struct!.tagId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TagMembershipParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TagMembershipParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memberId !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberId = this._memberId;
    }
    if (this._memberType !== undefined) {
      hasAnyValues = true;
      internalValueResult.memberType = this._memberType;
    }
    if (this._tagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagId = this._tagId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TagMembershipParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memberId = undefined;
      this._memberType = undefined;
      this._tagId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memberId = value.memberId;
      this._memberType = value.memberType;
      this._tagId = value.tagId;
    }
  }

  // member_id - computed: false, optional: false, required: true
  private _memberId?: string; 
  public get memberId() {
    return this.getStringAttribute('member_id');
  }
  public set memberId(value: string) {
    this._memberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberIdInput() {
    return this._memberId;
  }

  // member_type - computed: false, optional: false, required: true
  private _memberType?: string; 
  public get memberType() {
    return this.getStringAttribute('member_type');
  }
  public set memberType(value: string) {
    this._memberType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberTypeInput() {
    return this._memberType;
  }

  // tag_id - computed: false, optional: false, required: true
  private _tagId?: string; 
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
  public set tagId(value: string) {
    this._tagId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/tag_membership dnacenter_tag_membership}
*/
export class TagMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_tag_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TagMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TagMembership to import
  * @param importFromId The id of the existing TagMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/tag_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TagMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_tag_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/resources/tag_membership dnacenter_tag_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TagMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: TagMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_tag_membership',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._parameters.internalValue = config.parameters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // item - computed: true, optional: false, required: false
  private _item = new TagMembershipItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // parameters - computed: false, optional: false, required: true
  private _parameters = new TagMembershipParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: TagMembershipParameters) {
    this._parameters.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      parameters: tagMembershipParametersToTerraform(this._parameters.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: tagMembershipParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TagMembershipParametersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
