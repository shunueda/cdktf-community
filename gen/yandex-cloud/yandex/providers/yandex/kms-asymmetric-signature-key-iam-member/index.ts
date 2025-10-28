// https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/kms_asymmetric_signature_key_iam_member
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsAsymmetricSignatureKeyIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the compute `asymmetric_signature_key` to attach the policy to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/kms_asymmetric_signature_key_iam_member#asymmetric_signature_key_id KmsAsymmetricSignatureKeyIamMember#asymmetric_signature_key_id}
  */
  readonly asymmetricSignatureKeyId: string;
  /**
  * An array of identities that will be granted the privilege in the `role`. Each entry can have one of the following values:
  *  * **userAccount:{user_id}**: A unique user ID that represents a specific Yandex account.
  *  * **serviceAccount:{service_account_id}**: A unique service account ID.
  *  * **federatedUser:{federated_user_id}**: A unique federated user ID.
  *  * **federatedUser:{federated_user_id}:**: A unique SAML federation user account ID.
  *  * **group:{group_id}**: A unique group ID.
  *  * **system:group:federation:{federation_id}:users**: All users in federation.
  *  * **system:group:organization:{organization_id}:users**: All users in organization.
  *  * **system:allAuthenticatedUsers**: All authenticated users.
  *  * **system:allUsers**: All users, including unauthenticated ones.
  * 
  * ~> for more information about system groups, see [Cloud Documentation](https://yandex.cloud/docs/iam/concepts/access-control/system-group).
  * 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/kms_asymmetric_signature_key_iam_member#member KmsAsymmetricSignatureKeyIamMember#member}
  */
  readonly member: string;
  /**
  * The role that should be assigned. Only one yandex_kms_asymmetric_signature_key_iam_member can be used per role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/kms_asymmetric_signature_key_iam_member#role KmsAsymmetricSignatureKeyIamMember#role}
  */
  readonly role: string;
  /**
  * For test purposes, to compensate IAM operations delay
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/kms_asymmetric_signature_key_iam_member#sleep_after KmsAsymmetricSignatureKeyIamMember#sleep_after}
  */
  readonly sleepAfter?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/kms_asymmetric_signature_key_iam_member yandex_kms_asymmetric_signature_key_iam_member}
*/
export class KmsAsymmetricSignatureKeyIamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_kms_asymmetric_signature_key_iam_member";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsAsymmetricSignatureKeyIamMember resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsAsymmetricSignatureKeyIamMember to import
  * @param importFromId The id of the existing KmsAsymmetricSignatureKeyIamMember that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/kms_asymmetric_signature_key_iam_member#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsAsymmetricSignatureKeyIamMember to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_kms_asymmetric_signature_key_iam_member", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.168.0/docs/resources/kms_asymmetric_signature_key_iam_member yandex_kms_asymmetric_signature_key_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsAsymmetricSignatureKeyIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: KmsAsymmetricSignatureKeyIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_kms_asymmetric_signature_key_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.168.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asymmetricSignatureKeyId = config.asymmetricSignatureKeyId;
    this._member = config.member;
    this._role = config.role;
    this._sleepAfter = config.sleepAfter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asymmetric_signature_key_id - computed: false, optional: false, required: true
  private _asymmetricSignatureKeyId?: string; 
  public get asymmetricSignatureKeyId() {
    return this.getStringAttribute('asymmetric_signature_key_id');
  }
  public set asymmetricSignatureKeyId(value: string) {
    this._asymmetricSignatureKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asymmetricSignatureKeyIdInput() {
    return this._asymmetricSignatureKeyId;
  }

  // member - computed: false, optional: false, required: true
  private _member?: string; 
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // sleep_after - computed: false, optional: true, required: false
  private _sleepAfter?: number; 
  public get sleepAfter() {
    return this.getNumberAttribute('sleep_after');
  }
  public set sleepAfter(value: number) {
    this._sleepAfter = value;
  }
  public resetSleepAfter() {
    this._sleepAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sleepAfterInput() {
    return this._sleepAfter;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asymmetric_signature_key_id: cdktf.stringToTerraform(this._asymmetricSignatureKeyId),
      member: cdktf.stringToTerraform(this._member),
      role: cdktf.stringToTerraform(this._role),
      sleep_after: cdktf.numberToTerraform(this._sleepAfter),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asymmetric_signature_key_id: {
        value: cdktf.stringToHclTerraform(this._asymmetricSignatureKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      member: {
        value: cdktf.stringToHclTerraform(this._member),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sleep_after: {
        value: cdktf.numberToHclTerraform(this._sleepAfter),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
